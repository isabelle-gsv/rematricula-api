import { Controller, Post, Param, UseGuards, Request, Get } from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('matriculas')
@Controller('matriculas')
export class MatriculaController {
  constructor(private service: MatriculaService) {}

  // Matricula protegida (aluno autenticado)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post(':turmaId')
  matricular(@Request() req, @Param('turmaId') turmaId: number) {
    const alunoId = req.user.sub;
    return this.service.matricular(alunoId, Number(turmaId));
  }

  // lista minhas matrículas
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('minhas')
  minhas(@Request() req) {
    const alunoId = req.user.sub;
    return this.service.listByAluno(alunoId);
  }

  // disciplinas cursadas
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('cursadas')
  disciplinasCursadas(@Request() req) {
    const alunoId = req.user.sub;
    return this.service.disciplinasCursadas(alunoId);
  }
}
