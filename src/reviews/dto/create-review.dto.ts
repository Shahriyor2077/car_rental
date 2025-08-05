import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, MinLength, MaxLength } from "class-validator";

export class CreateReviewsDto {
  @ApiProperty({
    description: "Foydalanuvchi ID",
    example: 1
  })
  @IsNumber({}, { message: "Foydalanuvchi ID raqam bo'lishi kerak" })
  user_id: number;

  @ApiProperty({
    description: "Avtomobil ID",
    example: 1
  })
  @IsNumber({}, { message: "Avtomobil ID raqam bo'lishi kerak" })
  car_id: number;

  @ApiProperty({
    description: "Sharh matni",
    example: "Avtomobil juda yaxshi ishlaydi"
  })
  @IsString({ message: "Sharh matn bo'lishi kerak" })
  @MinLength(10, { message: "Sharh kamida 10 ta harf bo'lishi kerak" })
  @MaxLength(500, { message: "Sharh 500 ta harfdan oshmasligi kerak" })
  comment: string;

  @ApiProperty({
    description: "Baho (1-5)",
    example: "5"
  })
  @IsString({ message: "Baho matn bo'lishi kerak" })
  rating: string;
}