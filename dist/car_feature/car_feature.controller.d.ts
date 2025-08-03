import { CarFeatureService } from './car_feature.service';
import { CreateCarFeatureDto } from './dto/create-car_feature.dto';
import { UpdateCarFeatureDto } from './dto/update-car_feature.dto';
export declare class CarFeatureController {
    private readonly carFeatureService;
    constructor(carFeatureService: CarFeatureService);
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
    findOne(id: string): import("generated/prisma").Prisma.Prisma__car_featureClient<{
        id: bigint;
        car_id: bigint;
        feature_id: bigint;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateCarFeatureDto: UpdateCarFeatureDto): import("generated/prisma").Prisma.Prisma__car_featureClient<{
        id: bigint;
        car_id: bigint;
        feature_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__car_featureClient<{
        id: bigint;
        car_id: bigint;
        feature_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
