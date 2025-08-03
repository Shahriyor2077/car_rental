import { Injectable } from '@nestjs/common';
import { CreateRentalsDto } from './dto/create-rental.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateRentalsDto } from './dto/update-rental.dto';


@Injectable()
export class RentalService {
  constructor(private readonly prismaService: PrismaService){}
  create(createRentalDto: CreateRentalsDto) {
    return this.prismaService.rentals.create({data: createRentalDto});
  }

  findAll() {
    return this.prismaService.rentals.findMany();
  }

  findOne(id: number) {
    return this.prismaService.rentals.findUnique({where: {id}});
  }

  update(id: number, updateRentalDto: UpdateRentalsDto) {
    return this.prismaService.rentals.update({where: {id}, data: updateRentalDto});
  }

  remove(id: number) {
    return this.prismaService.rentals.delete({where: {id}});
  }
}
