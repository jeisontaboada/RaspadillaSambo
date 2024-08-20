import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pedido } from './pedido.entity';
import { Tamanio } from 'src/modules/tamanio/entities/tamanio.entity';
import { DetallePedidoCrema } from './detalle-pedido-crema';

@Entity({ name: 'detalle_pedido' })
export class DetallePedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.detallesPedidos)
  pedido: Pedido;

  @ManyToOne(() => Tamanio, (tamanio) => tamanio.detallesPedidos)
  tamanio: Tamanio;

  @OneToMany(() => DetallePedidoCrema, (dc) => dc.detallePedido)
  detallePedidoCremas: DetallePedidoCrema[];
}
