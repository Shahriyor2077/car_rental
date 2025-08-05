import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarController {
    private readonly carService;
    constructor(carService: CarService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateCarDto: UpdateCarDto): Promise<{
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
    remove(id: string): Promise<{
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
