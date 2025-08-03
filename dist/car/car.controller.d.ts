import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarController {
    private readonly carService;
    constructor(carService: CarService);
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
    findOne(id: string): import("generated/prisma").Prisma.Prisma__carClient<{
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
    update(id: string, updateCarDto: UpdateCarDto): import("generated/prisma").Prisma.Prisma__carClient<{
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
    remove(id: string): import("generated/prisma").Prisma.Prisma__carClient<{
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
