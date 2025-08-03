import { Module } from '@nestjs/common';
import { CarMaintenanceService } from './car_maintenance.service';
import { CarMaintenanceController } from './car_maintenance.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CarMaintenanceController],
  providers: [CarMaintenanceService],
})
export class CarMaintenanceModule {}
