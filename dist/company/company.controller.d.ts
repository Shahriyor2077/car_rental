import { CompanyService } from "./company.service";
import { CreateCompaniesDto } from "./dto/create-company.dto";
import { UpdateCompaniesDto } from "./dto/update-company.dto";
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CreateCompaniesDto): import("generated/prisma").Prisma.Prisma__companiesClient<{
        phone: string;
        id: number;
        name: string;
        address: string;
        license_number: string;
        created_at: Date;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__companiesClient<{
        phone: string;
        id: number;
        name: string;
        address: string;
        license_number: string;
        created_at: Date;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateCompanyDto: UpdateCompaniesDto): import("generated/prisma").Prisma.Prisma__companiesClient<{
        phone: string;
        id: number;
        name: string;
        address: string;
        license_number: string;
        created_at: Date;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__companiesClient<{
        phone: string;
        id: number;
        name: string;
        address: string;
        license_number: string;
        created_at: Date;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        phone: string;
        id: number;
        name: string;
        address: string;
        license_number: string;
        created_at: Date;
    }[]>;
}
