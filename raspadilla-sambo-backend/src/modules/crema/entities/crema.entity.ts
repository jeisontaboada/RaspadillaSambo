import { DetallePedidoCrema } from "src/modules/pedido/entities/detalle-pedido-crema";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:"crema"
})
export class Crema {

    @PrimaryGeneratedColumn()
    id:number

    @Column({
        type:"varchar",
        length:50,
        unique:true,
        nullable:false
    })
    nombre:string

    @OneToMany(
        () => DetallePedidoCrema,
        dpc => dpc.crema
    )
    detalles_pedidos_cremas: DetallePedidoCrema[]
}
