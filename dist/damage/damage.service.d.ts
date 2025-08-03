import { CreateDamagesDto } from './dto/create-damage.dto';
import { UpdateDamagesDto } from './dto/update-damage.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class DamageService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDamageDto: CreateDamagesDto): import("generated/prisma").Prisma.Prisma__damagesClient<{
        description: string;
        id: bigint;
        rental_id: bigint;
        cost_estimate: string;
        damage_date: Date;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        description: string;
        id: bigint;
        rental_id: bigint;
        cost_estimate: string;
        damage_date: Date;
    }[]>;
    findOne(id: number): import("generated/prisma").Prisma.Prisma__damagesClient<{
        description: string;
        id: bigint;
        rental_id: bigint;
        cost_estimate: string;
        damage_date: Date;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, updateDamageDto: UpdateDamagesDto): import("generated/prisma").Prisma.Prisma__damagesClient<{
        description: string;
        id: bigint;
        rental_id: bigint;
        cost_estimate: string;
        damage_date: Date;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: number): import("generated/prisma").Prisma.Prisma__damagesClient<{
        description: string;
        id: bigint;
        rental_id: bigint;
        cost_estimate: string;
        damage_date: Date;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
