import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AlunoService } from '../aluno/aluno.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/login.dto';

// Controller de autenticação: login local e Google + rota /me
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private alunoService: AlunoService) {}

  // Login tradicional (email + senha)
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const aluno = await this.alunoService.validateCredentials(
      loginDto.email,
      loginDto.senha,
    );
    if (!aluno) return { error: 'Credenciais inválidas' };
    return this.authService.login(aluno);
  }

  // rota para obter dados do token
  @UseGuards(JwtAuthGuard)
  @Get('me')
  me(@Req() req) {
    return req.user;
  }

  // inicia o OAuth2 do Google (redireciona)
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {
    return; // o guard faz o redirect
  }

  // callback do Google
  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleRedirect(@Req() req) {
    // req.user: { email, name }
    return this.authService.googleLogin(req.user);
  }
}