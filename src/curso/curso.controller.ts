import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { CursoService } from './curso.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { CreateCursoDto } from './dto/create-curso.dto';

@ApiTags('cursos')
@Controller('cursos')
export class CursoController {
  constructor(private service: CursoService) {}

 @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.service.create(createCursoDto);
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
  update(@Param('id') id: number, @Body() updateCursoDto: UpdateCursoDto) {
    return this.service.update(Number(id), updateCursoDto as any);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(Number(id));
  }
}
