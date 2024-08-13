import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoUsuarioService } from './tipo-usuario.service';
import { CreateTipoUsuarioDto } from './dto/create-tipo-usuario.dto';


@Controller('tipo-usuario')
export class TipoUsuarioController {
  constructor(private readonly tipoUsuarioService: TipoUsuarioService) {}

  @Post()
  create(@Body() createTipoUsuarioDto: CreateTipoUsuarioDto) {
    return this.tipoUsuarioService.create(createTipoUsuarioDto);
  }

  @Get()
  findAll() {
    return this.tipoUsuarioService.findAll();
  }

}
