import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) { }

    async validateStaff(email: string, password: string) {
        const staff = await this.prisma.staff.findUnique({ where: { email } });
        if (!staff) throw new UnauthorizedException('Invalid Credentials');

        const passwordValid = await bcrypt.compare(password, staff.password);
        if (!passwordValid) throw new UnauthorizedException('Invalid Credentials');

        if (staff.isActive === false) {
            throw new ForbiddenException('Your account has been deactivated. Contact the administrator.');
        }

        return staff;
    }

    async login(email: string, password: string) {
        // Step 1: Try to find user in Discipline Staff table
        try {
            const staff = await this.prisma.staff.findUnique({ where: { email } });

            if (staff) {
                const passwordValid = await bcrypt.compare(password, staff.password);
                if (!passwordValid) {
                    throw new UnauthorizedException('Invalid Credentials');
                }

                // Check if account is active
                if (staff.isActive === false) {
                    throw new ForbiddenException('Your account has been deactivated. Contact the administrator.');
                }

                // Generate JWT token with discipline permissions based on role
                const permissions = this.getPermissionsForRole(staff.role);

                const payload = {
                    userId: staff.id.toString(),
                    email: staff.email,
                    name: `${staff.firstName} ${staff.lastName}`,
                    role: staff.role,
                    permissions: permissions
                };

                const token = this.jwtService.sign(payload, {
                    secret: process.env.JWT_SECRET || 'shared-secret-key',
                    expiresIn: '24h'
                });

                return {
                    access_token: token,
                    user: {
                        id: staff.id,
                        firstName: staff.firstName,
                        lastName: staff.lastName,
                        email: staff.email,
                        role: staff.role,
                    }
                };
            }
        } catch (error) {
            if (error instanceof UnauthorizedException || error instanceof ForbiddenException) {
                throw error;
            }
            // Continue to check library system if staff not found
        }

        // Step 2: If not found in discipline staff, check Library system
        try {
            const libraryBackendUrl = process.env.LIBRARY_BACKEND_URL || 'https://rca-lms-backend-gdsc.onrender.com';

            const response = await axios.post(
                `${libraryBackendUrl}/auth/validate-user`,
                { email, password },
                {
                    timeout: 10000,
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            if (response.data.isValid && response.data.role === 'LIBRARIAN') {
                // Generate JWT token with library permissions
                const payload = {
                    userId: response.data.userId,
                    email: email,
                    name: response.data.name,
                    role: 'LIBRARIAN',
                    permissions: {
                        library: ['*'] // Full library access
                    }
                };

                const token = this.jwtService.sign(payload, {
                    secret: process.env.JWT_SECRET || 'shared-secret-key',
                    expiresIn: '24h'
                });

                return {
                    access_token: token,
                    user: {
                        id: response.data.userId,
                        email: email,
                        firstName: response.data.name.split(' ')[0],
                        lastName: response.data.name.split(' ')[1] || '',
                        role: 'LIBRARIAN'
                    }
                };
            }
        } catch (error) {
            // Library system unavailable or user not found - continue to throw error below
            console.error('Failed to check library system:', error.message);
        }

        // Step 3: User not found in either system
        throw new UnauthorizedException('Invalid Credentials');
    }

    private getPermissionsForRole(role: string): any {
        switch (role) {
            case 'ADMIN':
                return {
                    discipline: ['*'], // Full discipline access
                    library: ['*']     // Full library access
                };
            case 'DISCIPLINE':
                return {
                    discipline: ['*'] // Full discipline access
                };
            case 'NURSE':
                return {
                    discipline: ['health.view', 'students.view_health']
                };
            case 'LIBRARIAN':
                return {
                    library: ['*'] // Full library access
                };
            default:
                return {};
        }
    }

    async register(staffData: Record<string, unknown>) {
        const hashedPassword = await bcrypt.hash(staffData.password as string, 10);
        const staff = await this.prisma.staff.create({
            data: {
                firstName: staffData.firstName as string,
                lastName: staffData.lastName as string,
                email: staffData.email as string,
                password: hashedPassword,
                phoneNumber: staffData.phoneNumber as string,
                role: (staffData.role as any) || 'DISCIPLINE'
            }
        });
        return staff;
    }
}
