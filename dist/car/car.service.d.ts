import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class CarService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCarDto: CreateCarDto): import("generated/prisma").Prisma.Prisma__carClient<{
        id: bigint;
        created_at: Date;
        branch_id: bigint;
        brand: string;
        model: string;
        year: string;
        color: bigint;
        mileage: bigint;
        price_per_day: string;
        is_available: boolean;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: bigint;
        created_at: Date;
        branch_id: bigint;
        brand: string;
        model: string;
        year: string;
        color: bigint;
        mileage: bigint;
        price_per_day: string;
        is_available: boolean;
    }[]>;
    findOne(id: number): import("generated/prisma").Prisma.Prisma__carClient<{
        id: bigint;
        created_at: Date;
        branch_id: bigint;
        brand: string;
        model: string;
        year: string;
        color: bigint;
        mileage: bigint;
        price_per_day: string;
        is_available: boolean;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, updateCarDto: UpdateCarDto): import("generated/prisma").Prisma.Prisma__carClient<{
        id: bigint;
        created_at: Date;
        branch_id: bigint;
        brand: string;
        model: string;
        year: string;
        color: bigint;
        mileage: bigint;
        price_per_day: string;
        is_available: boolean;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: number): import("generated/prisma").Prisma.Prisma__carClient<{
        id: bigint;
        created_at: Date;
        branch_id: bigint;
        brand: string;
        model: string;
        year: string;
        color: bigint;
        mileage: bigint;
        price_per_day: string;
        is_available: boolean;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
