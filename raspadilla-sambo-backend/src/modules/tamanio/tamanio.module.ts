import { Module } from '@nestjs/common';
import { TamanioService } from './tamanio.service';
import { TamanioController } from './tamanio.controller';

@Module({
  controllers: [TamanioController],
  providers: [TamanioService],
})
export class TamanioModule {}
