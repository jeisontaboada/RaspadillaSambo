import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TamanioService } from './tamanio.service';
import { CreateTamanioDto } from './dto/create-tamanio.dto';
import { UpdateTamanioDto } from './dto/update-tamanio.dto';

@Controller('tamanio')
export class TamanioController {
  constructor(private readonly tamanioService: TamanioService) {}

  @Post()
  create(@Body() createTamanioDto: CreateTamanioDto) {
    return this.tamanioService.create(createTamanioDto);
  }

  @Get()
  findAll() {
    return this.tamanioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tamanioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTamanioDto: UpdateTamanioDto) {
    return this.tamanioService.update(+id, updateTamanioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tamanioService.remove(+id);
  }
}
