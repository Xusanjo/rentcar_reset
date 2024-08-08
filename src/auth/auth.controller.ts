import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { Request } from 'express';
import { JwtAuthGuard } from "./guards/jwt-auth.guard"

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Req() req: Request) {
    return this.authService.login(req.body);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('refresh-token')
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshToken(refreshTokenDto.refreshToken);
  }

  @Post('update-password')
  @UseGuards(JwtAuthGuard)
  async updatePassword(@Req() req: Request, @Body() updatePasswordDto: UpdatePasswordDto) {
    const userId = req.user['sub']; // Assumes user ID is stored in JWT payload
    return this.authService.updatePassword(userId, updatePasswordDto);
  }
}


