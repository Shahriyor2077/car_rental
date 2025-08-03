import { RentalService } from './rental.service';
import { CreateRentalsDto } from './dto/create-rental.dto';
import { UpdateRentalsDto } from './dto/update-rental.dto';
export declare class RentalController {
    private readonly rentalService;
    constructor(rentalService: RentalService);
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
    findOne(id: string): import("generated/prisma").Prisma.Prisma__rentalsClient<{
        id: bigint;
        created_at: Date;
        car_id: bigint;
        status: import("generated/prisma").$Enums.RentalStatus;
        user_id: bigint;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateRentalDto: UpdateRentalsDto): import("generated/prisma").Prisma.Prisma__rentalsClient<{
        id: bigint;
        created_at: Date;
        car_id: bigint;
        status: import("generated/prisma").$Enums.RentalStatus;
        user_id: bigint;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__rentalsClient<{
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
