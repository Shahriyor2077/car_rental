import { Injectable } from '@nestjs/common';
import { CreateCarMaintenanceDto } from './dto/create-car_maintenance.dto';
import { UpdateCarMaintenanceDto } from './dto/update-car_maintenance.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CarMaintenanceService {
  constructor(private readonly prismaService: PrismaService){}
  create(createCarMaintenanceDto: CreateCarMaintenanceDto) {
    return this.prismaService.car_maintenance.create({data: createCarMaintenanceDto});
  }

  findAll() {
    return this.prismaService.car_maintenance.findMany();
  }

  findOne(id: number) {
    return this.prismaService.car_maintenance.findUnique({where:{id}});
  }

  update(id: number, updateCarMaintenanceDto: UpdateCarMaintenanceDto) {
    return this.prismaService.car_maintenance.update({where: {id}, data: updateCarMaintenanceDto})
  }

  remove(id: number) {
    return this.prismaService.car_maintenance.delete({where: {id}});
  }
}
