import { Module } from '@nestjs/common';
import { DamageService } from './damage.service';
import { DamageController } from './damage.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DamageController],
  providers: [DamageService],
})
export class DamageModule {}
