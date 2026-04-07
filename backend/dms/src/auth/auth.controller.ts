import { Controller, Post, Body } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    @Throttle({ default: { limit: 5, ttl: 60 } })
    async login(@Body() body: any) {
        return this.authService.login(body.email, body.password);
    }

    @Post('register')
    async register(@Body() body: any){
        return this.authService.register(body);
    }
}
