import { IsEmail, IsNotEmpty, isNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty({ message: 'No tiene que estar vacio' })
  @IsString({ message: 'Tiene que ser texto' })
  usuario: string;

  @IsNotEmpty({ message: 'No tiene que estar vacio' })
  @IsString({ message: 'Tiene que ser texto' })
  contrasenia: string;

  @IsNotEmpty({ message: 'No tiene que estar vacio' })
  @IsEmail()
  correo: string;
}
