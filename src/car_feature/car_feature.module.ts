import { Module } from '@nestjs/common';
import { CarFeatureService } from './car_feature.service';
import { CarFeatureController } from './car_feature.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CarFeatureController],
  providers: [CarFeatureService],
})
export class CarFeatureModule {}
