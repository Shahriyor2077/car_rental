import { CreateCompaniesDto } from './dto/create-company.dto';
import { UpdateCompaniesDto } from './dto/update-company.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class CompanyService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCompanyDto: CreateCompaniesDto): import("generated/prisma").Prisma.Prisma__companiesClient<{
        phone: string;
        id: bigint;
        created_at: Date;
        name: string;
        address: string;
        license_number: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        phone: string;
        id: bigint;
        created_at: Date;
        name: string;
        address: string;
        license_number: string;
    }[]>;
    findOne(id: number): import("generated/prisma").Prisma.Prisma__companiesClient<{
        phone: string;
        id: bigint;
        created_at: Date;
        name: string;
        address: string;
        license_number: string;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, updateCompanyDto: UpdateCompaniesDto): import("generated/prisma").Prisma.Prisma__companiesClient<{
        phone: string;
        id: bigint;
        created_at: Date;
        name: string;
        address: string;
        license_number: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: number): import("generated/prisma").Prisma.Prisma__companiesClient<{
        phone: string;
        id: bigint;
        created_at: Date;
        name: string;
        address: string;
        license_number: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
