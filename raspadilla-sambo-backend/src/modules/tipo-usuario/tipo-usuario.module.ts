import { Module } from '@nestjs/common';
import { TipoUsuarioService } from './tipo-usuario.service';
import { TipoUsuarioController } from './tipo-usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoUsuario } from './entities/tipo-usuario.entity';

@Module({
  controllers: [TipoUsuarioController],
  imports:[TypeOrmModule.forFeature([TipoUsuario])],
  providers: [TipoUsuarioService],
})
export class TipoUsuarioModule {}
