import { TipoUsuario } from 'src/modules/tipo-usuario/entities/tipo-usuario.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'usuario',
})
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
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
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @ManyToOne(() => TipoUsuario, (tpu) => tpu.usuarios, {
    eager: true,
  })
  tipoUsuario: TipoUsuario;
}
