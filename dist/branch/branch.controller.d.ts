import { BranchService } from './branch.service';
import { UpdateBranchesDto } from './dto/update-branch.dto';
import { CreateBranchesDto } from './dto/create-branch.dto';
import { WinstonLoggerService } from '../common/logger/winston-logger.service';
export declare class BranchController {
    private readonly branchService;
    private readonly logger;
    constructor(branchService: BranchService, logger: WinstonLoggerService);
    create(createBranchDto: CreateBranchesDto): import("generated/prisma").Prisma.Prisma__branchesClient<{
        phone: string;
        id: bigint;
        created_at: Date;
        name: string;
        address: string;
        company_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        phone: string;
        id: bigint;
        created_at: Date;
        name: string;
        address: string;
        company_id: bigint;
    }[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__branchesClient<{
        phone: string;
        id: bigint;
        created_at: Date;
        name: string;
        address: string;
        company_id: bigint;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateBranchDto: UpdateBranchesDto): import("generated/prisma").Prisma.Prisma__branchesClient<{
        phone: string;
        id: bigint;
        created_at: Date;
        name: string;
        address: string;
        company_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__branchesClient<{
        phone: string;
        id: bigint;
        created_at: Date;
        name: string;
        address: string;
        company_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
