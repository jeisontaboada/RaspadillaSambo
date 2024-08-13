import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'usuario',
})
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique:true,
    nullable: false,
  })
  usuario: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  contrasenia: string;

  @Column({
    type: 'varchar',
    length: 70,
    unique: true,
    nullable: false,
  })
  correo: string;

  @Column({
    type:"timestamp",
    default:()=>"CURRENT_TIMESTAMP"
  })
  created_at:Date

}
