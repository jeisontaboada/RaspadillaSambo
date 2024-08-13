import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCremaDto {
  @IsString({ message: 'Debe ser un texto' })
  @IsNotEmpty({ message: 'No debe estar vacio' })
  nombre: string;
}
