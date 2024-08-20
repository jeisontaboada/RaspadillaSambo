import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EstadoPedido } from './estado-pedido';
import { DetallePedido } from './detalle-pedido';

@Entity({ name: 'pedido' })
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  num_pedido: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @ManyToOne(() => EstadoPedido, (ep) => ep.pedidos)
  estadoPedido: EstadoPedido;

  @OneToMany(() => DetallePedido, (dp) => dp.pedido)
  detallesPedidos: DetallePedido[];
}
