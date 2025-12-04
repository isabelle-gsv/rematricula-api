import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AlunoService } from '../aluno/aluno.service';

// Serviço de autenticação:
// - login local (email+senha)
// - login via Google (valida e-mail já cadastrado e retorna JWT)

@Injectable()
export class AuthService {
  constructor(
    private alunoService: AlunoService,
    private jwtService: JwtService,
  ) {}

  /** 🔹 Login tradicional (email + senha) */
  async validateUser(email: string, senha: string) {
    const aluno = await this.alunoService.validateCredentials(email, senha);
    if (!aluno) return null;
    return aluno;
  }

  // Gera JWT padrão
  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  /** 🔹 Login via Google OAuth2 */
  async googleLogin(googleUser: any) {
    if (!googleUser?.email) {
      throw new UnauthorizedException('Google: sem email.');
    }

    // 1️⃣ Verifica se o aluno existe no banco
    const aluno = await this.alunoService.findByEmail(googleUser.email);
    if (!aluno) {
      // NÃO criamos aluno automaticamente: rejeitamos.
      throw new UnauthorizedException('E-mail não cadastrado no sistema. Contate a secretaria.');
    }

    // 2️⃣ Gera token usando o aluno do banco
    const payload = { sub: aluno.id, email: aluno.email };

    return {
      message: 'Login via Google realizado com sucesso.',
      aluno,
      access_token: this.jwtService.sign(payload),
    };
  }
}
