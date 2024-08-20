import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pedido } from './pedido.entity';

@Entity({ name: 'estado_pedido' })
export class EstadoPedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  nombre: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @OneToMany(() => Pedido, (p) => p.estadoPedido)
  pedidos: Pedido[];
}
