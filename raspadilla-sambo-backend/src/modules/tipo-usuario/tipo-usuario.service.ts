import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateTipoUsuarioDto } from './dto/create-tipo-usuario.dto';
import { Repository } from 'typeorm';
import { TipoUsuario } from './entities/tipo-usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class TipoUsuarioService {
  constructor(
    @InjectRepository(TipoUsuario)
    private readonly repo: Repository<TipoUsuario>,
  ) {}
  async create(createTipoUsuarioDto: CreateTipoUsuarioDto) {
    const { nombre } = createTipoUsuarioDto;

    const data = await this.repo.findOne({ where: { nombre } });
    if (data) {
      throw new ConflictException('Ya existe el usuaruio');
    }

    const usuario = this.repo.create({ nombre });
    await this.repo.save(usuario);
    return usuario;
  }

  async findAll() {
    return await this.repo.find();
  }
}
