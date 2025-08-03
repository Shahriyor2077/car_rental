import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateRentalsDto } from './create-rental.dto';

export class UpdateRentalsDto extends PartialType(CreateRentalsDto) {
  @ApiPropertyOptional({
    description: 'Foydalanuvchi ID (ixtiyoriy)',
    example: 1
  })
  user_id?: number;

  @ApiPropertyOptional({
    description: 'Avtomobil ID (ixtiyoriy)',
    example: 1
  })
  car_id?: number;

  @ApiPropertyOptional({
    description: 'Ijara boshlanish sanasi (ixtiyoriy)',
    example: '2024-01-15'
  })
  start_date?: string;

  @ApiPropertyOptional({
    description: 'Ijara tugash sanasi (ixtiyoriy)',
    example: '2024-01-20'
  })
  end_date?: string;

  @ApiPropertyOptional({
    description: 'Umumiy narxi (ixtiyoriy)',
    example: 2500000
  })
  total_price?: number;

  @ApiPropertyOptional({
    description: 'Ijara holati (ixtiyoriy)',
    example: 'ACTIVE',
    enum: ['PENDING', 'ACTIVE', 'COMPLETED', 'CANCELLED']
  })
  status?: 'PENDING' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
}