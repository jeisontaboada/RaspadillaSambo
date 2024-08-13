import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
