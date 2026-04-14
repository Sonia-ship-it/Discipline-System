import { Injectable, UnauthorizedException} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService} from '@nestjs/jwt'



@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService,){}

    async validateStaff(email: string, password: string){
        const staff = await this.prisma.staff.findUnique({ where: {email}});
        if(!staff) throw new UnauthorizedException("Invalid Credentials");

        const passwordValid = await bcrypt.compare(password, staff.password);
        if(!passwordValid) throw new UnauthorizedException("Invalid Credentials");

        return staff;
    }


    async login(email: string, password: string){
        const staff = await this.validateStaff(email, password);
        const payload = {sub: staff.id, email: staff.email, role: staff.role};
        return {access_token: this.jwtService.sign(payload)};
    }

    async register(staffData: any){
        const hashedPassword = await bcrypt.hash(staffData.password, 10);
        const staff = await this.prisma.staff.create({
            data: { ...staffData, password: hashedPassword}
        });

        return staff;
    }
}
