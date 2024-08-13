import { IsNotEmpty, IsString } from "class-validator";

export class CreateTallaDto {
   
    @IsNotEmpty({message:"No tiene que estar vacio"})
    @IsString({message:"Tiene que ser un texto"})
    nombre:string
}
