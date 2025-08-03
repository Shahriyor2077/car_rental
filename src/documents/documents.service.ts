import { Injectable } from '@nestjs/common';
import { CreateDocumentsDto } from './dto/create-document.dto';
import { UpdateDocumentsDto } from './dto/update-document.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DocumentsService {
  constructor(private readonly prismaService: PrismaService){}
  create(createDocumentDto: CreateDocumentsDto) {
    return this.prismaService.documents.create({data: createDocumentDto});
  }

  findAll() {
    return this.prismaService.documents.findMany();
  }

  findOne(id: number) {
    return this.prismaService.documents.findMany({where: {id}});
  }

  update(id: number, updateDocumentDto: UpdateDocumentsDto) {
    return this.prismaService.documents.update({where: {id}, data: updateDocumentDto})
  }

  remove(id: number) {
    return this.prismaService.documents.delete({where: {id}});
  }
}
