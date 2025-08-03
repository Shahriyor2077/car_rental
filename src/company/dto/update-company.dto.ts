import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateCompaniesDto } from './create-company.dto';

export class UpdateCompaniesDto extends PartialType(CreateCompaniesDto) {
  @ApiPropertyOptional({
    description: 'Kompaniya nomi (ixtiyoriy)',
    example: 'Avto Ijara MChJ'
  })
  name?: string;

  @ApiPropertyOptional({
    description: 'Kompaniya manzili (ixtiyoriy)',
    example: 'Toshkent shahri, Chilonzor tumani, 1-uy'
  })
  address?: string;

  @ApiPropertyOptional({
    description: 'Telefon raqami (ixtiyoriy)',
    example: '+998901234567'
  })
  phone?: string;

  @ApiPropertyOptional({
    description: 'Litsenziya raqami (ixtiyoriy)',
    example: 'L123456789'
  })
  license_number?: string;
}