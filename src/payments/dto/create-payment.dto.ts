import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDateString, IsIn } from 'class-validator';

export class CreatePaymentsDto {
  @ApiProperty({
    description: 'Ijaraga olingan avtomobil ID',
    example: 1
  })
  @IsNumber({}, { message: 'rental_id raqam bo\'lishi kerak' })
  rental_id: number;

  @ApiProperty({
    description: 'Toʻlov summasi',
    example: 100000
  })
  @IsNumber({}, { message: 'amount raqam bo\'lishi kerak' })
  amount: number;

  @ApiProperty({
    description: 'Toʻlov sanasi',
    example: '2024-08-01'
  })
  @IsDateString({}, { message: 'payment_date ISO formatda bo\'lishi kerak' })
  payment_date: string;

  @ApiProperty({
    description: 'Toʻlov turi',
    example: 'CASH',
    enum: ['CASH', 'CARD', 'TRANSFER']
  })
  @IsString({ message: 'payment_method matn bo\'lishi kerak' })
  @IsIn(['CASH', 'CARD', 'TRANSFER'], { message: 'Toʻlov turi CASH, CARD yoki TRANSFER bo\'lishi kerak' })
  payment_method: 'CASH' | 'CARD' | 'TRANSFER';

  @ApiProperty({
    description: 'Toʻlov statusi',
    example: 'PENDING',
    enum: ['PENDING', 'PAID', 'FAILED']
  })
  @IsString({ message: 'status matn bo\'lishi kerak' })
  @IsIn(['PENDING', 'PAID', 'FAILED'], { message: 'Status PENDING, PAID yoki FAILED bo\'lishi kerak' })
  status: 'PENDING' | 'PAID' | 'FAILED';
}