import { DetallePedido } from 'src/modules/pedido/entities/detalle-pedido';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tamanio' })
export class Tamanio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    nullable: false,
    default: 1,
  })
  cant_crema: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  talla: string;

  @Column({
    type: 'decimal',
    nullable: false,
    default: 0.0,
  })
  precio: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @OneToMany(() => DetallePedido, (dp) => dp.tamanio)
  detallesPedidos: DetallePedido[];
}
