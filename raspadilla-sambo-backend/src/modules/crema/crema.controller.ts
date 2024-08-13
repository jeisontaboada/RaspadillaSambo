import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CremaService } from './crema.service';
import { CreateCremaDto } from './dto/create-crema.dto';
import { UpdateCremaDto } from './dto/update-crema.dto';

@Controller('crema')
export class CremaController {
  constructor(private readonly cremaService: CremaService) {}

  @Post()
  create(@Body() createCremaDto: CreateCremaDto) {
    return this.cremaService.create(createCremaDto);
  }

  @Get()
  findAll() {
    return this.cremaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cremaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCremaDto: UpdateCremaDto) {
    return this.cremaService.update(+id, updateCremaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cremaService.remove(+id);
  }
}
