import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'tipo-usuario',
})
export class TipoUsuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
    nullable: false,
  })
  nombre: string;

  @OneToMany(() => Usuario, (user) => user.tipoUsuario)
  usuarios: Usuario[];
}
