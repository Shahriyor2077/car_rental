import { CreateCarFeatureDto } from './dto/create-car_feature.dto';
import { UpdateCarFeatureDto } from './dto/update-car_feature.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class CarFeatureService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCarFeatureDto: CreateCarFeatureDto): import("generated/prisma").Prisma.Prisma__car_featureClient<{
        id: bigint;
        car_id: bigint;
        feature_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: bigint;
        car_id: bigint;
        feature_id: bigint;
    }[]>;
    findOne(id: number): import("generated/prisma").Prisma.Prisma__car_featureClient<{
        id: bigint;
        car_id: bigint;
        feature_id: bigint;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, updateCarFeatureDto: UpdateCarFeatureDto): import("generated/prisma").Prisma.Prisma__car_featureClient<{
        id: bigint;
        car_id: bigint;
        feature_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: number): import("generated/prisma").Prisma.Prisma__car_featureClient<{
        id: bigint;
        car_id: bigint;
        feature_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
