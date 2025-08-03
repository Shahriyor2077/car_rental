import { CreateRentalsDto } from './dto/create-rental.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateRentalsDto } from './dto/update-rental.dto';
export declare class RentalService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createRentalDto: CreateRentalsDto): import("generated/prisma").Prisma.Prisma__rentalsClient<{
        id: bigint;
        created_at: Date;
        car_id: bigint;
        status: import("generated/prisma").$Enums.RentalStatus;
        user_id: bigint;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: bigint;
        created_at: Date;
        car_id: bigint;
        status: import("generated/prisma").$Enums.RentalStatus;
        user_id: bigint;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
    }[]>;
    findOne(id: number): import("generated/prisma").Prisma.Prisma__rentalsClient<{
        id: bigint;
        created_at: Date;
        car_id: bigint;
        status: import("generated/prisma").$Enums.RentalStatus;
        user_id: bigint;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, updateRentalDto: UpdateRentalsDto): import("generated/prisma").Prisma.Prisma__rentalsClient<{
        id: bigint;
        created_at: Date;
        car_id: bigint;
        status: import("generated/prisma").$Enums.RentalStatus;
        user_id: bigint;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: number): import("generated/prisma").Prisma.Prisma__rentalsClient<{
        id: bigint;
        created_at: Date;
        car_id: bigint;
        status: import("generated/prisma").$Enums.RentalStatus;
        user_id: bigint;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
