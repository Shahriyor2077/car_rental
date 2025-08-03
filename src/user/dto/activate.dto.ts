import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class ActivateDto {
  @ApiProperty({
    description: 'Email tasdiqlash linki',
    example: '550e8400-e29b-41d4-a716-446655440000'
  })
  @IsString({ message: 'Link matn bo\'lishi kerak' })
  @IsNotEmpty({ message: 'Link bo\'sh bo\'lishi mumkin emas' })
  link: string;
}