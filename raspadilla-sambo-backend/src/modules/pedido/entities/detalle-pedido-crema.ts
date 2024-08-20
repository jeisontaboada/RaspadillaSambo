import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { DetallePedido } from "./detalle-pedido"
import { Crema } from "src/modules/crema/entities/crema.entity"

@Entity({
    name: 'detalle_pedido_crema'
})
export class DetallePedidoCrema {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(
        () => DetallePedido,
        dp => dp.detallePedidoCremas
    )
    detallePedido: DetallePedido

    @ManyToOne(
        () => Crema,
        c => c.detalles_pedidos_cremas
    )
    crema: Crema
}