import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
    findOne(id: string): import("generated/prisma").Prisma.Prisma__userClient<{
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
    update(id: string, updateUserDto: UpdateUserDto): import("generated/prisma").Prisma.Prisma__userClient<{
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
    remove(id: string): import("generated/prisma").Prisma.Prisma__userClient<{
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
