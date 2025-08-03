import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString, IsDateString, IsIn, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentsDto } from './create-payment.dto';

export class UpdatePaymentsDto extends PartialType(CreatePaymentsDto) {
  @ApiPropertyOptional({
    description: 'Ijaraga olingan avtomobil ID (ixtiyoriy)',
    example: 1
  })
  @IsOptional()
  @IsNumber({}, { message: 'rental_id raqam bo\'lishi kerak' })
  rental_id?: number;

  @ApiPropertyOptional({
    description: 'Toʻlov summasi (ixtiyoriy)',
    example: 100000
  })
  @IsOptional()
  @IsNumber({}, { message: 'amount raqam bo\'lishi kerak' })
  amount?: number;

  @ApiPropertyOptional({
    description: 'Toʻlov sanasi (ixtiyoriy)',
    example: '2024-08-01'
  })
  @IsOptional()
  @IsDateString({}, { message: 'payment_date ISO formatda bo\'lishi kerak' })
  payment_date?: string;

  @ApiPropertyOptional({
    description: 'Toʻlov turi (ixtiyoriy)',
    example: 'CASH',
    enum: ['CASH', 'CARD', 'TRANSFER']
  })
  @IsOptional()
  @IsString({ message: 'payment_method matn bo\'lishi kerak' })
  @IsIn(['CASH', 'CARD', 'TRANSFER'], { message: 'Toʻlov turi CASH, CARD yoki TRANSFER bo\'lishi kerak' })
  payment_method?: 'CASH' | 'CARD' | 'TRANSFER';

  @ApiPropertyOptional({
    description: 'Toʻlov statusi (ixtiyoriy)',
    example: 'PENDING',
    enum: ['PENDING', 'PAID', 'FAILED']
  })
  @IsOptional()
  @IsString({ message: 'status matn bo\'lishi kerak' })
  @IsIn(['PENDING', 'PAID', 'FAILED'], { message: 'Status PENDING, PAID yoki FAILED bo\'lishi kerak' })
  status?: 'PENDING' | 'PAID' | 'FAILED';
}
