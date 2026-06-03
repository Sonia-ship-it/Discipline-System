import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { toStaffCreateData } from '../common/staff-data.util';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

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
    const staff = await this.validateStaff(email, password);
    const payload = { sub: staff.id, email: staff.email, role: staff.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: staff.id,
        firstName: staff.firstName,
        lastName: staff.lastName,
        email: staff.email,
        role: staff.role,
      },
    };
  }

  async register(staffData: Record<string, unknown>) {
    const data = toStaffCreateData(staffData);
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const staff = await this.prisma.staff.create({
      data: { ...data, password: hashedPassword },
    });
    return staff;
  }
}
