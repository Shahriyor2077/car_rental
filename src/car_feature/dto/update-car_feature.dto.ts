import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCarFeatureDto } from './create-car_feature.dto';

export class UpdateCarFeatureDto extends PartialType(CreateCarFeatureDto) {
  @ApiPropertyOptional({
    description: 'Avtomobil ID (ixtiyoriy)',
    example: 1
  })
  @IsOptional()
  @IsNumber({}, { message: 'car_id raqam bo\'lishi kerak' })
  car_id?: number;

  @ApiPropertyOptional({
    description: 'Xususiyat ID (ixtiyoriy)',
    example: 2
  })
  @IsOptional()
  @IsNumber({}, { message: 'feature_id raqam bo\'lishi kerak' })
  feature_id?: number;
}