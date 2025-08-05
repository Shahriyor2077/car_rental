import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateDocumentsDto } from './dto/create-document.dto';
import { UpdateDocumentsDto } from './dto/update-document.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DocumentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDocumentDto: CreateDocumentsDto, currentUserId?: number) {
    // User faqat o'z nomiga document yarata oladi
    if (currentUserId && createDocumentDto.user_id !== currentUserId) {
      throw new BadRequestException('Faqat o\'z nomingizga hujjat yarata olasiz');
    }

    const user = await this.prismaService.user.findUnique({
      where: { id: createDocumentDto.user_id }
    });
    
    if (!user) {
      throw new BadRequestException('Foydalanuvchi topilmadi');
    }

    return await this.prismaService.documents.create({
      data: createDocumentDto,
      include: { user: true }
    });
  }

  async findAll() {
    return await this.prismaService.documents.findMany({
      include: { user: true }
    });
  }

  async findOne(id: number, currentUserId?: number, userRole?: string) {
    const document = await this.prismaService.documents.findUnique({
      where: { id },
      include: { user: true }
    });
    
    if (!document) {
      throw new NotFoundException('Hujjat topilmadi');
    }

    // Admin va Manager barcha hujjatlarni ko'ra oladi
    if (userRole === 'ADMIN' || userRole === 'MANAGER') {
      return document;
    }

    // User faqat o'z hujjatini ko'ra oladi
    if (document.user_id !== currentUserId) {
      throw new BadRequestException('Faqat o\'z hujjatingizga kirishingiz mumkin');
    }
    
    return document;
  }

  async update(id: number, updateDocumentDto: UpdateDocumentsDto) {
    const existingDocument = await this.prismaService.documents.findUnique({
      where: { id }
    });
    
    if (!existingDocument) {
      throw new NotFoundException('Hujjat topilmadi');
    }

    return await this.prismaService.documents.update({
      where: { id },
      data: updateDocumentDto,
      include: { user: true }
    });
  }

  async remove(id: number) {
    const existingDocument = await this.prismaService.documents.findUnique({
      where: { id }
    });
    
    if (!existingDocument) {
      throw new NotFoundException('Hujjat topilmadi');
    }

    return await this.prismaService.documents.delete({
      where: { id }
    });
  }
}
