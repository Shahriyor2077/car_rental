import { Injectable } from '@nestjs/common';
import { CreateNotificationsDto } from './dto/create-notification.dto';
import { UpdateNotificationsDto } from './dto/update-notification.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotificationService {
  constructor(private readonly prismaService: PrismaService){}
  create(createNotificationDto: CreateNotificationsDto) {
    return this.prismaService.notifications.create({data: createNotificationDto});
  }

  findAll() {
    return this.prismaService.notifications.findMany();
  }

  findOne(id: number) {
    return this.prismaService.notifications.findUnique({where: {id}});
  }

  update(id: number, updateNotificationDto: UpdateNotificationsDto) {
    return this.prismaService.notifications.update({where: {id}, data: updateNotificationDto});
  }

  remove(id: number) {
    return this.prismaService.notifications.delete({where: {id}});
  }
}
