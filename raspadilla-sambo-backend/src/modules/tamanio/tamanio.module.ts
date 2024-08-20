import { Module } from '@nestjs/common';
import { TamanioService } from './tamanio.service';
import { TamanioController } from './tamanio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tamanio } from './entities/tamanio.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Tamanio
    ])
  ],
  controllers: [TamanioController],
  providers: [TamanioService],
})
export class TamanioModule {}
