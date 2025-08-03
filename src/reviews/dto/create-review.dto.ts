import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateReviewsDto {
  @ApiProperty({
    description: 'Foydalanuvchi ID',
    example: 1
  })
  @IsNumber({}, { message: 'user_id raqam bo\'lishi kerak' })
  user_id: number;

  @ApiProperty({
    description: 'Avtomobil ID',
    example: 2
  })
  @IsNumber({}, { message: 'car_id raqam bo\'lishi kerak' })
  car_id: number;

  @ApiProperty({
    description: 'Reyting (1-5)',
    example: '5'
  })
  @IsString({ message: 'Reyting matn bo\'lishi kerak' })
  @MinLength(1, { message: 'Reyting kamida 1 ta belgi bo\'lishi kerak' })
  @MaxLength(1, { message: 'Reyting 1 ta belgidan oshmasligi kerak' })
  rating: string;
}