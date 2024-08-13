import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoUsuario } from '../tipo-usuario/entities/tipo-usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private readonly repo: Repository<Usuario>,
  ) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    return  'This action adds a new usuario';
  }

  async findAll() {
    return  (await this.repo.find()).map(usuario =>{
      return {
        ...usuario,
        tipoUsuario: usuario.tipoUsuario.nombre
      };
    })
  }

  async findOne(id: number) {}
  async findOneByCorreo(usuario: string) {
    const usuarios = await this.repo.findOne({ where: { usuario
     } });
    if (!usuarios) {
      throw new NotFoundException("No existe el usuario")
    }
    return usuarios
  }



  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  async remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
