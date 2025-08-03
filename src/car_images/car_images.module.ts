import { Module } from '@nestjs/common';
import { CarImagesService } from './car_images.service';
import { CarImagesController } from './car_images.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [CarImagesController],
  providers: [CarImagesService],
})
export class CarImagesModule {}
