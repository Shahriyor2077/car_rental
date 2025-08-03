import { Injectable } from '@nestjs/common';
import { CreateCarFeatureDto } from './dto/create-car_feature.dto';
import { UpdateCarFeatureDto } from './dto/update-car_feature.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CarFeatureService {
  constructor(private readonly prismaService: PrismaService){}
  create(createCarFeatureDto: CreateCarFeatureDto) {
    return this.prismaService.car_feature.create({data: createCarFeatureDto});
  }

  findAll() {
    return this.prismaService.car_feature.findMany();
  }

  findOne(id: number) {
    return this.prismaService.car_feature.findUnique({where: {id}});
  }

  update(id: number, updateCarFeatureDto: UpdateCarFeatureDto) {
    return this.prismaService.car_feature.update({where: {id}, data:updateCarFeatureDto});
  }

  remove(id: number) {
    return this.prismaService.car_feature.delete({where: {id}});
  }
}
