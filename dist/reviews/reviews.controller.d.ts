import { ReviewsService } from './reviews.service';
import { CreateReviewsDto } from './dto/create-review.dto';
import { UpdateReviewsDto } from './dto/update-review.dto';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(createReviewDto: CreateReviewsDto): import("generated/prisma").Prisma.Prisma__reviewsClient<{
        id: bigint;
        created_at: Date;
        car_id: bigint;
        user_id: bigint;
        rating: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: bigint;
        created_at: Date;
        car_id: bigint;
        user_id: bigint;
        rating: string;
    }[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__reviewsClient<{
        id: bigint;
        created_at: Date;
        car_id: bigint;
        user_id: bigint;
        rating: string;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateReviewDto: UpdateReviewsDto): import("generated/prisma").Prisma.Prisma__reviewsClient<{
        id: bigint;
        created_at: Date;
        car_id: bigint;
        user_id: bigint;
        rating: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__reviewsClient<{
        id: bigint;
        created_at: Date;
        car_id: bigint;
        user_id: bigint;
        rating: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
