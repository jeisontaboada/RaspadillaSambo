import { IsNotEmpty, IsString } from "class-validator"

export class LoginDto {
    @IsString({message:"El usuario debe ser un texto"})
    @IsNotEmpty({message:"El usuario no puede estar vacío"})
    usuario:string

    @IsString({message:"El usuario debe ser un texto"})
    @IsNotEmpty({message:"El usuario no puede estar vacío"})
    contrasenia:string
}