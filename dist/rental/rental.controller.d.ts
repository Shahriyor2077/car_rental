import { RentalService } from './rental.service';
import { CreateRentalsDto } from './dto/create-rental.dto';
import { UpdateRentalsDto } from './dto/update-rental.dto';
export declare class RentalController {
    private readonly rentalService;
    constructor(rentalService: RentalService);
    create(createRentalDto: CreateRentalsDto, req: any): Promise<{
        car: {
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
        };
        user: {
            full_name: string;
            phone: string;
            email: string;
            password: string;
            birthday: string;
            is_active: boolean;
            id: number;
            activation_link: string | null;
        };
    } & {
        id: number;
        created_at: Date;
        user_id: number;
        car_id: number;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
        status: import("generated/prisma").$Enums.RentalStatus;
    }>;
    findOne(id: string, req: any): Promise<{
        car: {
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
        };
        user: {
            full_name: string;
            phone: string;
            email: string;
            password: string;
            birthday: string;
            is_active: boolean;
            id: number;
            activation_link: string | null;
        };
    } & {
        id: number;
        created_at: Date;
        user_id: number;
        car_id: number;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
        status: import("generated/prisma").$Enums.RentalStatus;
    }>;
    findAll(req: any): Promise<({
        car: {
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
        };
        user: {
            full_name: string;
            phone: string;
            email: string;
            password: string;
            birthday: string;
            is_active: boolean;
            id: number;
            activation_link: string | null;
        };
    } & {
        id: number;
        created_at: Date;
        user_id: number;
        car_id: number;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
        status: import("generated/prisma").$Enums.RentalStatus;
    })[]>;
    update(id: string, updateRentalDto: UpdateRentalsDto): Promise<{
        car: {
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
        };
        user: {
            full_name: string;
            phone: string;
            email: string;
            password: string;
            birthday: string;
            is_active: boolean;
            id: number;
            activation_link: string | null;
        };
    } & {
        id: number;
        created_at: Date;
        user_id: number;
        car_id: number;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
        status: import("generated/prisma").$Enums.RentalStatus;
    }>;
    remove(id: string): Promise<{
        id: number;
        created_at: Date;
        user_id: number;
        car_id: number;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
        status: import("generated/prisma").$Enums.RentalStatus;
    }>;
}
