import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

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
        // Find user in Discipline Staff table (ALL users including librarians)
        const staff = await this.prisma.staff.findUnique({ where: { email } });

        if (!staff) {
            throw new UnauthorizedException('Invalid credentials. Please check your email and password.');
        }

        // Verify password
        const passwordValid = await bcrypt.compare(password, staff.password);
        if (!passwordValid) {
            throw new UnauthorizedException('Invalid credentials. Please check your email and password.');
        }

        // Check if account is active
        if (staff.isActive === false) {
            throw new ForbiddenException('Your account has been deactivated. Please contact the administrator for assistance.');
        }

        // Generate JWT token with role-based permissions
        const permissions = this.getPermissionsForRole(staff.role);

        const payload = {
            sub: staff.id.toString(),
            userId: staff.id.toString(),
            email: staff.email,
            firstName: staff.firstName,
            lastName: staff.lastName,
            name: `${staff.firstName} ${staff.lastName}`,
            role: staff.role,
            allowedPages: staff.permissions || [], // Custom page permissions from database
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
                role: (staffData.role as any) || 'DISCIPLINE',
                permissions: (staffData.permissions as string[]) || []
            }
        });
        return staff;
    }
}
