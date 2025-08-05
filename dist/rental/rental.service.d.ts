import { CreateRentalsDto } from './dto/create-rental.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateRentalsDto } from './dto/update-rental.dto';
export declare class RentalService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createRentalDto: CreateRentalsDto, userId: number): Promise<{
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
    findAll(currentUserId?: number, userRole?: string): Promise<({
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
    findByUserId(userId: number): Promise<({
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
    findOne(id: number, currentUserId?: number, userRole?: string): Promise<{
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
    update(id: number, updateRentalDto: UpdateRentalsDto): Promise<{
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
    remove(id: number): Promise<{
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
