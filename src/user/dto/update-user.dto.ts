import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({
    description: 'Foydalanuvchining to\'liq ismi (ixtiyoriy)',
    example: 'Aziz Azizov'
  })
  full_name?: string;

  @ApiPropertyOptional({
    description: 'Telefon raqami (ixtiyoriy)',
    example: '+998901234567'
  })
  phone?: string;

  @ApiPropertyOptional({
    description: 'Email manzili (ixtiyoriy)',
    example: 'aziz@example.com'
  })
  email?: string;

  @ApiPropertyOptional({
    description: 'Parol (ixtiyoriy)',
    example: '123456'
  })
  password?: string;

  @ApiPropertyOptional({
    description: 'Tug\'ilgan kun (ixtiyoriy)',
    example: '1990-01-01'
  })
  birthday?: string;

  @ApiPropertyOptional({
    description: 'Foydalanuvchi faolmi (ixtiyoriy)',
    example: true
  })
  is_active?: boolean;
}