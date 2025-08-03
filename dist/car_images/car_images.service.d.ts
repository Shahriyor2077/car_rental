import { CreateCarImagesDto } from './dto/create-car_image.dto';
import { UpdateCarImagesDto } from './dto/update-car_image.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class CarImagesService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCarImageDto: CreateCarImagesDto): import("generated/prisma").Prisma.Prisma__car_imagesClient<{
        id: bigint;
        car_id: bigint;
        image: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: bigint;
        car_id: bigint;
        image: string;
    }[]>;
    findOne(id: number): import("generated/prisma").Prisma.Prisma__car_imagesClient<{
        id: bigint;
        car_id: bigint;
        image: string;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, updateCarImageDto: UpdateCarImagesDto): import("generated/prisma").Prisma.Prisma__car_imagesClient<{
        id: bigint;
        car_id: bigint;
        image: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: number): string;
}
