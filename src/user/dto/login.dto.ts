import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginDto {
  @ApiProperty({
    description: "Email manzili",
    example: "aziz@example.com",
  })
  @IsEmail({}, { message: "To'g'ri email kiriting" })
  email: string;

  @ApiProperty({
    description: "Parol",
    example: "123456",
  })
  @IsString({ message: "Parol matn bo'lishi kerak" })
  @MinLength(6, { message: "Parol kamida 6 ta belgi bo'lishi kerak" })
  password: string;
}
