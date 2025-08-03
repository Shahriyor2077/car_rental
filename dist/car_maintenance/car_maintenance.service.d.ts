import { CreateCarMaintenanceDto } from './dto/create-car_maintenance.dto';
import { UpdateCarMaintenanceDto } from './dto/update-car_maintenance.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class CarMaintenanceService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCarMaintenanceDto: CreateCarMaintenanceDto): import("generated/prisma").Prisma.Prisma__car_maintenanceClient<{
        description: string;
        id: bigint;
        car_id: bigint;
        service_date: string;
        cost: import("generated/prisma/runtime/library").Decimal;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        description: string;
        id: bigint;
        car_id: bigint;
        service_date: string;
        cost: import("generated/prisma/runtime/library").Decimal;
    }[]>;
    findOne(id: number): import("generated/prisma").Prisma.Prisma__car_maintenanceClient<{
        description: string;
        id: bigint;
        car_id: bigint;
        service_date: string;
        cost: import("generated/prisma/runtime/library").Decimal;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, updateCarMaintenanceDto: UpdateCarMaintenanceDto): import("generated/prisma").Prisma.Prisma__car_maintenanceClient<{
        description: string;
        id: bigint;
        car_id: bigint;
        service_date: string;
        cost: import("generated/prisma/runtime/library").Decimal;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: number): import("generated/prisma").Prisma.Prisma__car_maintenanceClient<{
        description: string;
        id: bigint;
        car_id: bigint;
        service_date: string;
        cost: import("generated/prisma/runtime/library").Decimal;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
