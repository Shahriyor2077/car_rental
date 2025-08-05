import { PrismaService } from '../prisma/prisma.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCarDto: CreateCarDto): Promise<{
        id: number;
        created_at: Date;
        branch_id: number;
        brand: string;
        model: string;
        year: string;
        color: string;
        mileage: number;
        price_per_day: string;
        is_available: boolean;
    }>;
    findAll(): Promise<({
        branch: {
            phone: string;
            id: number;
            name: string;
            address: string;
            created_at: Date;
            company_id: number;
        };
    } & {
        id: number;
        created_at: Date;
        branch_id: number;
        brand: string;
        model: string;
        year: string;
        color: string;
        mileage: number;
        price_per_day: string;
        is_available: boolean;
    })[]>;
    findOne(id: number): Promise<{
        branch: {
            phone: string;
            id: number;
            name: string;
            address: string;
            created_at: Date;
            company_id: number;
        };
    } & {
        id: number;
        created_at: Date;
        branch_id: number;
        brand: string;
        model: string;
        year: string;
        color: string;
        mileage: number;
        price_per_day: string;
        is_available: boolean;
    }>;
    update(id: number, updateCarDto: UpdateCarDto): Promise<{
        id: number;
        created_at: Date;
        branch_id: number;
        brand: string;
        model: string;
        year: string;
        color: string;
        mileage: number;
        price_per_day: string;
        is_available: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        created_at: Date;
        branch_id: number;
        brand: string;
        model: string;
        year: string;
        color: string;
        mileage: number;
        price_per_day: string;
        is_available: boolean;
    }>;
}
