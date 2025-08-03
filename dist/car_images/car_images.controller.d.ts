import { CarImagesService } from './car_images.service';
import { CreateCarImagesDto } from './dto/create-car_image.dto';
import { UpdateCarImagesDto } from './dto/update-car_image.dto';
export declare class CarImagesController {
    private readonly carImagesService;
    constructor(carImagesService: CarImagesService);
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
    findOne(id: string): import("generated/prisma").Prisma.Prisma__car_imagesClient<{
        id: bigint;
        car_id: bigint;
        image: string;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateCarImageDto: UpdateCarImagesDto): import("generated/prisma").Prisma.Prisma__car_imagesClient<{
        id: bigint;
        car_id: bigint;
        image: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): string;
}
