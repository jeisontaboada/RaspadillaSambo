import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCremaDto } from './dto/create-crema.dto';
import { UpdateCremaDto } from './dto/update-crema.dto';
import { Repository } from 'typeorm';
import { Crema } from './entities/crema.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CremaService {
  constructor(
    @InjectRepository(Crema)
    private readonly repo: Repository<Crema>,
  ) {}

  async create(createCremaDto: CreateCremaDto) {
    const { nombre } = createCremaDto;
    const existingCrema = await this.findOneByName(nombre);

    if (existingCrema) {
      throw new ConflictException('La crema ya existe');
    }
    const crema = this.repo.create(createCremaDto);
    await this.repo.save(crema);
    return crema;
  }

  async findAll() {
    return await this.repo.find();
  }
  async findOneByName(nombre: string) {
    return await this.repo.findOne({ where: { nombre } });
  }

  async findOne(id: number) {
    const crema = await this.repo.findOne({ where: { id } });

    if (!crema) {
      throw new NotFoundException(`No se encontro la crema ${id}`);
    }
    return crema;
  }

  async update(id: number, updateCremaDto: UpdateCremaDto) {

    const crema =await this.findOne(id)
    const ifExist = await this.findOneByName(updateCremaDto.nombre);

    if (ifExist) {
      throw new ConflictException("Nombre duplicado")
    }

    const cremaUpdate = await this.repo.preload({ id: id, ...updateCremaDto });

    await this.repo.save(cremaUpdate);
    return await this.findOne(id);
  }

  async remove(id: number) {
    const crema = await this.findOne(id);
    await this.repo.delete(crema);

    return;
  }
}
