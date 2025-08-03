import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateDocumentsDto {
  @ApiProperty({
    description: 'Foydalanuvchi ID',
    example: 1
  })
  @IsNumber({}, { message: 'user_id raqam bo\'lishi kerak' })
  user_id: number;

  @ApiProperty({
    description: 'Haydovchilik guvohnomasi raqami',
    example: 'AA1234567'
  })
  @IsString({ message: 'Guvohnoma raqami matn bo\'lishi kerak' })
  @MinLength(5, { message: 'Guvohnoma raqami kamida 5 ta harf bo\'lishi kerak' })
  deliver_license: string;
}