import { FeatureService } from './feature.service';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
export declare class FeatureController {
    private readonly featureService;
    constructor(featureService: FeatureService);
    create(createFeatureDto: CreateFeatureDto): import("generated/prisma").Prisma.Prisma__featureClient<{
        id: bigint;
        name: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: bigint;
        name: string;
    }[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__featureClient<{
        id: bigint;
        name: string;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateFeatureDto: UpdateFeatureDto): import("generated/prisma").Prisma.Prisma__featureClient<{
        id: bigint;
        name: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__featureClient<{
        id: bigint;
        name: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
