import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
      private readonly usuarioService: UsuarioService,
      private jwtService: JwtService,
    ) {}
  
  
    async login(dto: LoginDto) {
      const user = await this.usuarioService.findOneByCorreo(dto.usuario);
      if (user?.contrasenia !== dto.contrasenia) {
        throw new UnauthorizedException("Credenciales inválidas");
      }
      const payload = { id: user.id, usuario:user.usuario, email: user.correo};
      const token = await this.jwtService.signAsync(payload)
      return {
        access_token: token,
        token_type: 'bearer',
        expires_in: 30
      }
    }
  
  }
  
