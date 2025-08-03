import { Injectable } from '@nestjs/common';
import { CreateCarImagesDto } from './dto/create-car_image.dto';
import { UpdateCarImagesDto } from './dto/update-car_image.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CarImagesService {
  constructor(private readonly prismaService: PrismaService){}
  create(createCarImageDto: CreateCarImagesDto) {
    return this.prismaService.car_images.create({data: createCarImageDto});
  }

  findAll() {
    return this.prismaService.car_images.findMany();
  }

  findOne(id: number) {
    return this.prismaService.car_images.findUnique({where: {id}});
  }

  update(id: number, updateCarImageDto: UpdateCarImagesDto) {
    return this.prismaService.car_images.update({where:{id}, data: updateCarImageDto});
  }

  remove(id: number) {
    return `This action removes a #${id} carImage`;
  }
}
