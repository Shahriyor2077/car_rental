import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength, MaxLength, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewsDto } from './create-review.dto';

export class UpdateReviewsDto extends PartialType(CreateReviewsDto) {
  @ApiPropertyOptional({
    description: 'Foydalanuvchi ID (ixtiyoriy)',
    example: 1
  })
  @IsOptional()
  @IsNumber({}, { message: 'user_id raqam bo\'lishi kerak' })
  user_id?: number;

  @ApiPropertyOptional({
    description: 'Avtomobil ID (ixtiyoriy)',
    example: 2
  })
  @IsOptional()
  @IsNumber({}, { message: 'car_id raqam bo\'lishi kerak' })
  car_id?: number;

  @ApiPropertyOptional({
    description: 'Reyting (ixtiyoriy)',
    example: '5'
  })
  @IsOptional()
  @IsString({ message: 'Reyting matn bo\'lishi kerak' })
  @MinLength(1, { message: 'Reyting kamida 1 ta belgi bo\'lishi kerak' })
  @MaxLength(1, { message: 'Reyting 1 ta belgidan oshmasligi kerak' })
  rating?: string;
}
        