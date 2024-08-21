import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallePedidoCrema } from './entities/detalle-pedido-crema';
import { DetallePedido } from './entities/detalle-pedido';
import { EstadoPedido } from './entities/estado-pedido';
import { Pedido } from './entities/pedido.entity';
import { TamanioModule } from '../tamanio/tamanio.module';
import { CremaModule } from '../crema/crema.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DetallePedidoCrema,
      DetallePedido,
      EstadoPedido,
      Pedido
    ]),
    TamanioModule,
    CremaModule
  ],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
