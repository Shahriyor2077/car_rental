import { PaymentsService } from './payments.service';
import { UpdatePaymentsDto } from './dto/update-payment.dto';
import { CreatePaymentsDto } from './dto/create-payment.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(createPaymentDto: CreatePaymentsDto): Promise<{
        rental: {
            id: number;
            created_at: Date;
            user_id: number;
            car_id: number;
            start_date: string;
            end_date: string;
            total_price: import("generated/prisma/runtime/library").Decimal;
            status: import("generated/prisma").$Enums.RentalStatus;
        };
    } & {
        id: number;
        status: import("generated/prisma").$Enums.PaymentStatus;
        rental_id: number;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
    }>;
    findOne(id: string): Promise<{
        rental: {
            id: number;
            created_at: Date;
            user_id: number;
            car_id: number;
            start_date: string;
            end_date: string;
            total_price: import("generated/prisma/runtime/library").Decimal;
            status: import("generated/prisma").$Enums.RentalStatus;
        };
    } & {
        id: number;
        status: import("generated/prisma").$Enums.PaymentStatus;
        rental_id: number;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
    }>;
    update(id: string, updatePaymentDto: UpdatePaymentsDto): Promise<{
        rental: {
            id: number;
            created_at: Date;
            user_id: number;
            car_id: number;
            start_date: string;
            end_date: string;
            total_price: import("generated/prisma/runtime/library").Decimal;
            status: import("generated/prisma").$Enums.RentalStatus;
        };
    } & {
        id: number;
        status: import("generated/prisma").$Enums.PaymentStatus;
        rental_id: number;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
    }>;
    remove(id: string): Promise<{
        id: number;
        status: import("generated/prisma").$Enums.PaymentStatus;
        rental_id: number;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
    }>;
    findAll(): Promise<({
        rental: {
            id: number;
            created_at: Date;
            user_id: number;
            car_id: number;
            start_date: string;
            end_date: string;
            total_price: import("generated/prisma/runtime/library").Decimal;
            status: import("generated/prisma").$Enums.RentalStatus;
        };
    } & {
        id: number;
        status: import("generated/prisma").$Enums.PaymentStatus;
        rental_id: number;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
    })[]>;
}
