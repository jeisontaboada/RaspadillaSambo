import { Injectable } from '@nestjs/common';
import { CreateTamanioDto } from './dto/create-tamanio.dto';
import { UpdateTamanioDto } from './dto/update-tamanio.dto';

@Injectable()
export class TamanioService {
  create(createTamanioDto: CreateTamanioDto) {
    return 'This action adds a new tamanio';
  }

  findAll() {
    return `This action returns all tamanio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tamanio`;
  }

  update(id: number, updateTamanioDto: UpdateTamanioDto) {
    return `This action updates a #${id} tamanio`;
  }

  remove(id: number) {
    return `This action removes a #${id} tamanio`;
  }
}
