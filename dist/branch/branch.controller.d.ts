import { BranchService } from "./branch.service";
import { UpdateBranchesDto } from "./dto/update-branch.dto";
import { CreateBranchesDto } from "./dto/create-branch.dto";
export declare class BranchController {
    private readonly branchService;
    constructor(branchService: BranchService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateBranchDto: UpdateBranchesDto): Promise<{
        phone: string;
        id: number;
        name: string;
        address: string;
        created_at: Date;
        company_id: number;
    }>;
    remove(id: string): Promise<{
        phone: string;
        id: number;
        name: string;
        address: string;
        created_at: Date;
        company_id: number;
    }>;
}
