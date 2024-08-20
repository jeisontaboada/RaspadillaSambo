import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreatePedidoDto {
  @IsArray({ message: 'Las comandas deben ser un arreglo' })
  @ArrayMinSize(1, { message: 'Debe seleccionar al menos una comanda' })
  @ValidateNested({ each: true })
  @Type(() => ComandaDto)
  comanda: ComandaDto[];
}

export class ComandaDto {

  @IsNumber({}, { message: 'El id del tamaño debe ser un número' })
  @IsPositive({ message: 'El id del tamaño debe ser un número positivo' })
  idTamanio: number;

  @IsArray({ message: 'Las cremas deben ser un arreglo' })
  @ArrayMinSize(1, { message: 'Debe seleccionar al menos una crema' })
  @IsNumber({}, { each: true, message: 'Cada valor en cremas debe ser un número' })
  @IsPositive({ each: true, message: 'Cada valor en cremas debe ser un número positivo' })
  cremas: number[];
}
