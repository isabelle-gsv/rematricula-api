import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from './dto/update-disciplina.dto';
import { AddPrerequisitoDto } from './dto/add-prerequisito.dto';

@ApiTags('disciplinas')
@Controller('disciplinas')
export class DisciplinaController {
  constructor(private service: DisciplinaService) {}

  @Post()
  create(@Body() createDisciplinaDto: CreateDisciplinaDto) {
    return this.service.create(createDisciplinaDto);
  }

  @Post(':id/prerequisitos')
  addReq(@Param('id') id: number, @Body() addPrerequisitoDto: AddPrerequisitoDto) {
    return this.service.addPrerequisito(Number(id), addPrerequisitoDto.requisitoId);
  }

  @Delete('prerequisito/:id')
  removeReq(@Param('id') id: number) {
    return this.service.removePrerequisito(Number(id));
  }

  @Get(':id/prerequisitos')
  findReqs(@Param('id') id: number) {
    return this.service.listPrerequisitos(Number(id));
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
  update(@Param('id') id: number, @Body() updateDisciplinaDto: UpdateDisciplinaDto) {
    return this.service.update(Number(id), updateDisciplinaDto as any);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(Number(id));
  }
}
