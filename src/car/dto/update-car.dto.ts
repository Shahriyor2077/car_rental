import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  @ApiPropertyOptional({
    description: 'Filial ID (ixtiyoriy)',
    example: 1
  })
  branch_id?: number;

  @ApiPropertyOptional({
    description: 'Avtomobil brendi (ixtiyoriy)',
    example: 'Toyota'
  })
  brand?: string;

  @ApiPropertyOptional({
    description: 'Avtomobil modeli (ixtiyoriy)',
    example: 'Camry'
  })
  model?: string;

  @ApiPropertyOptional({
    description: 'Ishlab chiqarilgan yili (ixtiyoriy)',
    example: '2020'
  })
  year?: string;

  @ApiPropertyOptional({
    description: 'Rang kodi (ixtiyoriy)',
    example: 1
  })
  color?: number;

  @ApiPropertyOptional({
    description: 'Yurgan masofa (ixtiyoriy)',
    example: 50000
  })
  mileage?: number;

  @ApiPropertyOptional({
    description: 'Kunlik narxi (ixtiyoriy)',
    example: '500000'
  })
  price_per_day?: string;

  @ApiPropertyOptional({
    description: 'Avtomobil mavjudmi (ixtiyoriy)',
    example: true
  })
  is_available?: boolean;
}