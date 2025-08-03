import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentsDto } from './create-document.dto';

export class UpdateDocumentsDto extends PartialType(CreateDocumentsDto) {
  @ApiPropertyOptional({
    description: 'Foydalanuvchi ID (ixtiyoriy)',
    example: 1
  })
  @IsOptional()
  @IsNumber({}, { message: 'user_id raqam bo\'lishi kerak' })
  user_id?: number;

  @ApiPropertyOptional({
    description: 'Haydovchilik guvohnomasi raqami (ixtiyoriy)',
    example: 'AA1234567'
  })
  @IsOptional()
  @IsString({ message: 'Guvohnoma raqami matn bo\'lishi kerak' })
  @MinLength(5, { message: 'Guvohnoma raqami kamida 5 ta harf bo\'lishi kerak' })
  deliver_license?: string;
}
