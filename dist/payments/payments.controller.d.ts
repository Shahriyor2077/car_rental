import { PaymentsService } from './payments.service';
import { UpdatePaymentsDto } from './dto/update-payment.dto';
import { CreatePaymentsDto } from './dto/create-payment.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(createPaymentDto: CreatePaymentsDto): import("generated/prisma").Prisma.Prisma__paymentsClient<{
        id: bigint;
        rental_id: bigint;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
        status: import("generated/prisma").$Enums.PaymentStatus;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: bigint;
        rental_id: bigint;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
        status: import("generated/prisma").$Enums.PaymentStatus;
    }[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__paymentsClient<{
        id: bigint;
        rental_id: bigint;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
        status: import("generated/prisma").$Enums.PaymentStatus;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updatePaymentDto: UpdatePaymentsDto): import("generated/prisma").Prisma.Prisma__paymentsClient<{
        id: bigint;
        rental_id: bigint;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
        status: import("generated/prisma").$Enums.PaymentStatus;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): import("generated/prisma").Prisma.Prisma__paymentsClient<{
        id: bigint;
        rental_id: bigint;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
        status: import("generated/prisma").$Enums.PaymentStatus;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
