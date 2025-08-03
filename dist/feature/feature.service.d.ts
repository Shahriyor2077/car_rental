import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class FeatureService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createFeatureDto: CreateFeatureDto): import("generated/prisma").Prisma.Prisma__featureClient<{
        id: bigint;
        name: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: bigint;
        name: string;
    }[]>;
    findOne(id: number): import("generated/prisma").Prisma.Prisma__featureClient<{
        id: bigint;
        name: string;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, updateFeatureDto: UpdateFeatureDto): import("generated/prisma").Prisma.Prisma__featureClient<{
        id: bigint;
        name: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: number): import("generated/prisma").Prisma.Prisma__featureClient<{
        id: bigint;
        name: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
