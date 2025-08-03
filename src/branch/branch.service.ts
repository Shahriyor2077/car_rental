import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateBranchesDto } from './dto/create-branch.dto';
import { UpdateBranchesDto } from './dto/update-branch.dto';


@Injectable()
export class BranchService {
  constructor(private readonly prismaService: PrismaService){}
  create(createBranchDto: CreateBranchesDto) {
    return this.prismaService.branches.create({
      data: createBranchDto
    });
  }

  findAll() {
    return this.prismaService.branches.findMany();
  }

  findOne(id: number) {
    return this.prismaService.branches.findUnique({where: {id}});
  }

  update(id: number, updateBranchDto: UpdateBranchesDto) {
    return this.prismaService.branches.update({where: {id}, data: updateBranchDto});
  }

  remove(id: number) {
    return this.prismaService.branches.delete({where: {id}});
  }
}
