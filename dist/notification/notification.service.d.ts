import { CreateNotificationsDto } from './dto/create-notification.dto';
import { UpdateNotificationsDto } from './dto/update-notification.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class NotificationService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    findOne(id: number): import("generated/prisma").Prisma.Prisma__notificationsClient<{
        message: string;
        id: bigint;
        created_at: Date;
        user_id: bigint;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, updateNotificationDto: UpdateNotificationsDto): import("generated/prisma").Prisma.Prisma__notificationsClient<{
        message: string;
        id: bigint;
        created_at: Date;
        user_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: number): import("generated/prisma").Prisma.Prisma__notificationsClient<{
        message: string;
        id: bigint;
        created_at: Date;
        user_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
