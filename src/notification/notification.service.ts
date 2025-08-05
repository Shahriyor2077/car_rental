import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateNotificationsDto } from './dto/create-notification.dto';
import { UpdateNotificationsDto } from './dto/update-notification.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotificationService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createNotificationDto: CreateNotificationsDto) {
    const user = await this.prismaService.user.findUnique({
      where: { id: createNotificationDto.user_id }
    });
    
    if (!user) {
      throw new BadRequestException('Foydalanuvchi topilmadi');
    }

    return await this.prismaService.notifications.create({
      data: createNotificationDto,
      include: { user: true }
    });
  }

  async findAll() {
    return await this.prismaService.notifications.findMany({
      include: { user: true }
    });
  }

  async findOne(id: number, currentUserId?: number, userRole?: string) {
    const notification = await this.prismaService.notifications.findUnique({
      where: { id },
      include: { user: true }
    });
    
    if (!notification) {
      throw new NotFoundException('Bildirishnoma topilmadi');
    }

    // Admin va Manager barcha bildirishnomalarni ko'ra oladi
    if (userRole === 'ADMIN' || userRole === 'MANAGER') {
      return notification;
    }

    // User faqat o'z bildirishnomasini ko'ra oladi
    if (notification.user_id !== currentUserId) {
      throw new BadRequestException('Faqat o\'z bildirishnomaingizga kirishingiz mumkin');
    }
    
    return notification;
  }

  async update(id: number, updateNotificationDto: UpdateNotificationsDto) {
    const existingNotification = await this.prismaService.notifications.findUnique({
      where: { id }
    });
    
    if (!existingNotification) {
      throw new NotFoundException('Bildirishnoma topilmadi');
    }

    return await this.prismaService.notifications.update({
      where: { id },
      data: updateNotificationDto,
      include: { user: true }
    });
  }

  async remove(id: number) {
    const existingNotification = await this.prismaService.notifications.findUnique({
      where: { id }
    });
    
    if (!existingNotification) {
      throw new NotFoundException('Bildirishnoma topilmadi');
    }

    return await this.prismaService.notifications.delete({
      where: { id }
    });
  }
}
