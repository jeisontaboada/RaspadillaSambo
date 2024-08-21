import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTamanioDto } from './dto/create-tamanio.dto';
import { UpdateTamanioDto } from './dto/update-tamanio.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tamanio } from './entities/tamanio.entity';

@Injectable()
export class TamanioService {
  constructor(
    @InjectRepository(Tamanio)
    private readonly repo: Repository<Tamanio>,
  ) {}

  async create(createTamanioDto: CreateTamanioDto) {
    const {talla} = createTamanioDto;

    const data= await this.ifExistsTamanio(talla);
  }

  async findAll() {
    return await this.repo.find();
  }

  async ifExistsTamanio(talla: string) {
    const data = await this.repo.findOne({ where: { talla } });
    if (data) {
      throw new ConflictException('El tamaño ya existe');
    }
    return data;
  }

  async findOne(id: number) {
    const tamanio = await this.repo.findOne({ where: { id } });
    if (!tamanio) {
      throw new NotFoundException(`No se encontro el tamaño ${id}`);
    }
    return tamanio;
  }

  async update(id: number, updateTamanioDto: UpdateTamanioDto) {
    return `This action updates a #${id} tamanio`;
  }

  async remove(id: number) {
    return `This action removes a #${id} tamanio`;
  }
}
