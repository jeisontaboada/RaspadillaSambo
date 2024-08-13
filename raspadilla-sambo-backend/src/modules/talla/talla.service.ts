import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTallaDto } from './dto/create-talla.dto';
import { UpdateTallaDto } from './dto/update-talla.dto';
import { Repository } from 'typeorm';
import { Talla } from './entities/talla.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TallaService {
  constructor(
    @InjectRepository(Talla)
    private readonly repo: Repository<Talla>,
  ) {}

  async create(createTallaDto: CreateTallaDto) {
    const { nombre } = createTallaDto;
    const talla = await this.findOneByName(nombre);

    if (talla) {
      throw new ConflictException('La talla ya existe');
    }

    const crearTalla = this.repo.create(createTallaDto);

    await this.repo.save(crearTalla);
    return crearTalla;
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOneByName(nombre: string) {
    return await this.repo.findOne({ where: { nombre } });
  }

  async findOne(id: number) {
    const talla = await this.repo.findOne({ where: { id } });

    if (!talla) {
      throw new NotFoundException(`No se encontro la talla ${id}`);
    }
    return talla;
  }

  async update(id: number, updateTallaDto: UpdateTallaDto) {
    //Validad si exite la talla
    const talla = await this.findOne(id);

    //Validad si el nombre ya existe

    const tallaNombre = await this.findOneByName(updateTallaDto.nombre);

    if (tallaNombre) {
      throw new ConflictException('Ya existe la talla');
    }

    //Actualizando la data
    const tallaUpdate = await this.repo.preload({ id, ...updateTallaDto });
    //Guardar el objeto
    await this.repo.save(tallaUpdate);
    
    return await this.findOne(id)
  }

  async remove(id: number) {
    const talla = await this.findOne(id);

    await this.repo.delete(talla);
  }
}
