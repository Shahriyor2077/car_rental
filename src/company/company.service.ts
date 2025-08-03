import { Injectable } from '@nestjs/common';
import { CreateCompaniesDto } from './dto/create-company.dto';
import { UpdateCompaniesDto } from './dto/update-company.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private readonly prismaService: PrismaService){}
  create(createCompanyDto: CreateCompaniesDto) {
    return this.prismaService.companies.create({data: createCompanyDto});
  }

  findAll() {
    return this.prismaService.companies.findMany();
  }

  findOne(id: number) {
    return this.prismaService.companies.findUnique({where: {id}});
  }

  update(id: number, updateCompanyDto: UpdateCompaniesDto) {
    return this.prismaService.companies.update({where: {id}, data: updateCompanyDto});
  }

  remove(id: number) {
    return this.prismaService.companies.delete({where:{id}});
  }
}
