import { Module } from '@nestjs/common';
import { CremaService } from './crema.service';
import { CremaController } from './crema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crema } from './entities/crema.entity';

@Module({
  exports:[CremaService],
  imports:[TypeOrmModule.forFeature([Crema])],
  controllers: [CremaController],
  providers: [CremaService],
})
export class CremaModule {


}
