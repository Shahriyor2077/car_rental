import { Injectable } from '@nestjs/common';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FeatureService {
  constructor(private readonly prismaService: PrismaService){}
  create(createFeatureDto: CreateFeatureDto) {
    return this.prismaService.feature.create({data: createFeatureDto});
  }

  findAll() {
    return this.prismaService.feature.findMany();
  }

  findOne(id: number) {
    return this.prismaService.feature.findUnique({where:{id}});
  }

  update(id: number, updateFeatureDto: UpdateFeatureDto) {
    return this.prismaService.feature.update({where: {id}, data: updateFeatureDto});
  }

  remove(id: number) {
    return this.prismaService.feature.delete({where: {id}});
  }
}
