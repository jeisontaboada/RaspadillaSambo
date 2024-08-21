import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTamanioDto {
  @IsNumber({}, { message: 'Ingrese un numero' })
  cant_crema: number;

  @IsString({ message: 'Ingrese un texto' })
  @IsNotEmpty({ message: 'No debe ser un nulo' })
  talla: string;

  @IsNumber({}, { message: 'Ingrese un numero' })
  precio: number;
}
