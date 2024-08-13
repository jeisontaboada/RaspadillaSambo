import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"talla"})
export class Talla {
   

    @PrimaryGeneratedColumn()
    id:number

    @Column({
        type:"varchar",
        length:50,
        unique:true
    })
    nombre:String


}
