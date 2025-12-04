import { Controller, Post, Body, Get, Param, UseGuards, Put, Delete, Req } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { CreateAlunoDto } from './dto/crete-aluno.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('alunos')
@Controller('alunos')
export class AlunoController {
  constructor(private service: AlunoService) {}

  // Criar aluno (registro)
  @Post()
  create(@Body() dto: CreateAlunoDto) {
    return this.service.create(dto);
  }

  // Rota protegida: obter dados do próprio usuário
  @UseGuards(JwtAuthGuard)
  @Get('me')
  @ApiBearerAuth()
  me(@Req() req) {
    return this.service.findOne(req.user.sub);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateAlunoDto) {
    return this.service.update(Number(id), dto as any);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(Number(id));
  }
}