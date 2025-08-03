import { NotificationService } from './notification.service';
import { CreateNotificationsDto } from './dto/create-notification.dto';
import { UpdateNotificationsDto } from './dto/update-notification.dto';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    create(createNotificationDto: CreateNotificationsDto): import("generated/prisma").Prisma.Prisma__notificationsClient<{
        message: string;
        id: bigint;
        created_at: Date;
        user_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        message: string;
        id: bigint;
        created_at: Date;
        user_id: bigint;
    }[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__notificationsClient<{
        message: string;
        id: bigint;
        created_at: Date;
        user_id: bigint;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateNotificationDto: UpdateNotificationsDto): import("generated/prisma").Prisma.Prisma__notificationsClient<{
        message: string;
        id: bigint;
        created_at: Date;
        user_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__notificationsClient<{
        message: string;
        id: bigint;
        created_at: Date;
        user_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
