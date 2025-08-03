import { Injectable } from '@nestjs/common';
import { CreateDamagesDto } from './dto/create-damage.dto';
import { UpdateDamagesDto } from './dto/update-damage.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DamageService {
  constructor(private readonly prismaService: PrismaService){}
  create(createDamageDto: CreateDamagesDto) {
    return this.prismaService.damages.create({data: createDamageDto});
  }

  findAll() {
    return this.prismaService.damages.findMany();
  }

  findOne(id: number) {
    return this.prismaService.damages.findUnique({where: {id}});
  }

  update(id: number, updateDamageDto: UpdateDamagesDto) {
    return this.prismaService.damages.update({where: {id}, data: updateDamageDto});
  }

  remove(id: number) {
    return this.prismaService.damages.delete({where: {id}});
  }
}
