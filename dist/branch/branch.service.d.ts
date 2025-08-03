import { PrismaService } from '../prisma/prisma.service';
import { CreateBranchesDto } from './dto/create-branch.dto';
import { UpdateBranchesDto } from './dto/update-branch.dto';
export declare class BranchService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    findOne(id: number): import("generated/prisma").Prisma.Prisma__branchesClient<{
        phone: string;
        id: bigint;
        created_at: Date;
        name: string;
        address: string;
        company_id: bigint;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, updateBranchDto: UpdateBranchesDto): import("generated/prisma").Prisma.Prisma__branchesClient<{
        phone: string;
        id: bigint;
        created_at: Date;
        name: string;
        address: string;
        company_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: number): import("generated/prisma").Prisma.Prisma__branchesClient<{
        phone: string;
        id: bigint;
        created_at: Date;
        name: string;
        address: string;
        company_id: bigint;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
