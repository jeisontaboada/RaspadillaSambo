import { Module } from '@nestjs/common';
import { CremaModule } from './modules/crema/crema.module';
import { TallaModule } from './modules/talla/talla.module';
import { TamanioModule } from './modules/tamanio/tamanio.module';
import { PedidoModule } from './modules/pedido/pedido.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { TipoUsuarioModule } from './modules/tipo-usuario/tipo-usuario.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuditoriaModule } from './modules/auditoria/auditoria.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'mysql',
      host:process.env.DB_HOST,
      port:+process.env.DB_PORT,
      username:process.env.DB_USER,
      password:process.env.DB_PASSWORD,
      database:process.env.DB_DATABASE,
      synchronize:true,
      autoLoadEntities:true
    }),
    CremaModule,
    TallaModule,
    TamanioModule,
    PedidoModule,
    UsuarioModule,
    TipoUsuarioModule,
    AuthModule,
    AuditoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
