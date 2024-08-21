import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';
import { TamanioService } from '../tamanio/tamanio.service';
import { CremaService } from '../crema/crema.service';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly repo: Repository<Pedido>,
    private readonly tamanioService: TamanioService,
    private readonly cremaService : CremaService,
  ) {}

 async create(dto: CreatePedidoDto) {
  dto.comanda.map(async comanda => {
    const tamanio = await this.tamanioService.findOne(comanda.idTamanio);
    const listCremas = await Promise.all(
      comanda.cremas.map(async cremaId => {
        const crema = await this.cremaService.findOne(cremaId);
        return crema;
      })
    );

    const newPedido = this.repo.create({

    })
  
  })

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
