import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarService {
  constructor(private readonly prismaService: PrismaService){}
  
  async create(createCarDto: CreateCarDto) {
    // Branch mavjudligini tekshirish
    const branch = await this.prismaService.branches.findUnique({
      where: { id: createCarDto.branch_id }
    });
    
    if (!branch) {
      throw new BadRequestException('Filial topilmadi');
    }

    return await this.prismaService.car.create({
      data: {
        branch_id: createCarDto.branch_id,
        brand: createCarDto.brand,
        model: createCarDto.model,
        year: createCarDto.year,
        color: createCarDto.color,
        mileage: createCarDto.mileage,
        price_per_day: createCarDto.price_per_day,
        is_available: createCarDto.is_available,
      }
    });
  }
  
  async findAll() {
    return await this.prismaService.car.findMany({
      include: { branch: true }
    });
  }

  async findOne(id: number) {
    const car = await this.prismaService.car.findUnique({
      where: { id },
      include: { branch: true }
    });
    
    if (!car) {
      throw new NotFoundException('Avtomobil topilmadi');
    }
    
    return car;
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    // Car mavjudligini tekshirish
    const existingCar = await this.prismaService.car.findUnique({
      where: { id }
    });
    
    if (!existingCar) {
      throw new NotFoundException('Avtomobil topilmadi');
    }

    if (updateCarDto.branch_id) {
      const branch = await this.prismaService.branches.findUnique({
        where: { id: updateCarDto.branch_id }
      });
      
      if (!branch) {
        throw new BadRequestException('Filial topilmadi');
      }
    }

    const updateData: any = {};
    
    if (updateCarDto.branch_id !== undefined) updateData.branch_id = updateCarDto.branch_id;
    if (updateCarDto.brand !== undefined) updateData.brand = updateCarDto.brand;
    if (updateCarDto.model !== undefined) updateData.model = updateCarDto.model;
    if (updateCarDto.year !== undefined) updateData.year = updateCarDto.year;
    if (updateCarDto.color !== undefined) updateData.color = updateCarDto.color;
    if (updateCarDto.mileage !== undefined) updateData.mileage = updateCarDto.mileage;
    if (updateCarDto.price_per_day !== undefined) updateData.price_per_day = updateCarDto.price_per_day;
    if (updateCarDto.is_available !== undefined) updateData.is_available = updateCarDto.is_available;
    
    return await this.prismaService.car.update({
      where: { id }, 
      data: updateData
    });
  }

  async remove(id: number) {
    const existingCar = await this.prismaService.car.findUnique({
      where: { id },
      include: { rentals: true }
    });
    
    if (!existingCar) {
      throw new NotFoundException('Avtomobil topilmadi');
    }


    if (existingCar.rentals.length > 0) {
      throw new BadRequestException('Bu avtomobilda ijara tarixi mavjud. Ochirish mumkin emas');
    }

    return await this.prismaService.car.delete({
      where: { id }
    });
  }
}
