import { PrismaService } from '../prisma/prisma.service';
import { CreateBranchesDto } from './dto/create-branch.dto';
import { UpdateBranchesDto } from './dto/update-branch.dto';
export declare class BranchService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createBranchDto: CreateBranchesDto): Promise<{
        phone: string;
        id: number;
        name: string;
        address: string;
        created_at: Date;
        company_id: number;
    }>;
    findAll(): Promise<({
        company: {
            phone: string;
            id: number;
            name: string;
            address: string;
            license_number: string;
            created_at: Date;
        };
    } & {
        phone: string;
        id: number;
        name: string;
        address: string;
        created_at: Date;
        company_id: number;
    })[]>;
    findOne(id: number): Promise<{
        company: {
            phone: string;
            id: number;
            name: string;
            address: string;
            license_number: string;
            created_at: Date;
        };
    } & {
        phone: string;
        id: number;
        name: string;
        address: string;
        created_at: Date;
        company_id: number;
    }>;
    update(id: number, updateBranchDto: UpdateBranchesDto): Promise<{
        phone: string;
        id: number;
        name: string;
        address: string;
        created_at: Date;
        company_id: number;
    }>;
    remove(id: number): Promise<{
        phone: string;
        id: number;
        name: string;
        address: string;
        created_at: Date;
        company_id: number;
    }>;
}
