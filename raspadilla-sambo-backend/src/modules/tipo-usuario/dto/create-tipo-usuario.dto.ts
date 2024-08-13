import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoUsuarioDto {
  @IsNotEmpty({ message: 'No puede ser Nulo' })
  @IsString({ message: 'Tiene que ser texto' })
  nombre: string;
}
