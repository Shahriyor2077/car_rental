import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateFeatureDto {
  @ApiProperty({
    description: 'Xususiyat nomi',
    example: 'Bluetooth'
  })
  @IsString({ message: 'Nomi matn bo\'lishi kerak' })
  @MinLength(2, { message: 'Nomi kamida 2 ta harf bo\'lishi kerak' })
  @MaxLength(50, { message: 'Nomi 50 ta harfdan oshmasligi kerak' })
  name: string;
}