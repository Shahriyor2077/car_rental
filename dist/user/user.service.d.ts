import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createUserDto: CreateUserDto): import("generated/prisma").Prisma.Prisma__userClient<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: bigint;
        created_at: Date;
        activation_link: string | null;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: bigint;
        created_at: Date;
        activation_link: string | null;
    }[]>;
    findOne(id: number): import("generated/prisma").Prisma.Prisma__userClient<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: bigint;
        created_at: Date;
        activation_link: string | null;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findByEmail(email: string): Promise<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: bigint;
        created_at: Date;
        activation_link: string | null;
    } | null>;
    update(id: number, updateUserDto: UpdateUserDto): import("generated/prisma").Prisma.Prisma__userClient<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: bigint;
        created_at: Date;
        activation_link: string | null;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: number): import("generated/prisma").Prisma.Prisma__userClient<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: bigint;
        created_at: Date;
        activation_link: string | null;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
