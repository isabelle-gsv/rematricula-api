import { Controller, Post, Body, Get, Param, Query, Put, Delete } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';

@ApiTags('turmas')
@Controller('turmas')
export class TurmaController {
  constructor(private service: TurmaService) {}

  @Post()
  create(@Body() createTurmaDto: CreateTurmaDto) {
    return this.service.create(createTurmaDto);
  }

  @Get()
  findAll(@Query('periodo') periodo?: string) {
    if (periodo) return this.service.findByPeriodo(periodo);
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateTurmaDto: UpdateTurmaDto) {
    return this.service.update(Number(id), updateTurmaDto as any);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(Number(id));
  }
}
