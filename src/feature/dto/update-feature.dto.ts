import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, MinLength, MaxLength, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateFeatureDto } from './create-feature.dto';

export class UpdateFeatureDto extends PartialType(CreateFeatureDto) {
  @ApiPropertyOptional({
    description: 'Xususiyat nomi (ixtiyoriy)',
    example: 'Bluetooth'
  })
  @IsOptional()
  @IsString({ message: 'Nomi matn bo\'lishi kerak' })
  @MinLength(2, { message: 'Nomi kamida 2 ta harf bo\'lishi kerak' })
  @MaxLength(50, { message: 'Nomi 50 ta harfdan oshmasligi kerak' })
  name?: string;
}