import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly repo: Repository<Pedido>,
  ) {}

  create(createPedidoDto: CreatePedidoDto) {
    return createPedidoDto
    return 'This action adds a new pedido';
  }

  async findAll() {
    return await this.repo.find({
      relations: [
        'estadoPedido',
        'detallesPedidos',
        'detallesPedidos.tamanio',
        'detallesPedidos.detallePedidoCremas',
        'detallesPedidos.detallePedidoCremas.crema',
      ],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} pedido`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
