import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/common/guards/jwt-auth.guard';
import { AdminAuthGuard } from '../auth/common/guards/admin-auth.guard';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@ApiTags("Car - Avtomobillar")
@ApiBearerAuth()
@Controller("car")
export class CarController {
  constructor(private readonly carService: CarService) {}

  @ApiOperation({ summary: "Avtomobil yaratish" })
  @ApiResponse({ status: 201, description: "Avtomobil muvaffaqiyatli yaratildi" })
  @ApiResponse({ status: 400, description: "Noto'g'ri ma'lumotlar" })
  @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @ApiOperation({ summary: "Barcha avtomobillar ro'yxatini olish" })
  @ApiResponse({ status: 200, description: "Avtomobillar ro'yxati" })
  @Get()
  findAll() {
    return this.carService.findAll();
  }

  @ApiOperation({ summary: "Avtomobil ma'lumotini olish" })
  @ApiParam({ name: "id", description: "Avtomobil ID" })
  @ApiResponse({ status: 200, description: "Avtomobil ma'lumoti" })
  @ApiResponse({ status: 404, description: "Avtomobil topilmadi" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.carService.findOne(+id);
  }

  @ApiOperation({ summary: "Avtomobil ma'lumotini yangilash" })
  @ApiParam({ name: "id", description: "Avtomobil ID" })
  @ApiResponse({ status: 200, description: "Avtomobil yangilandi" })
  @ApiResponse({ status: 404, description: "Avtomobil topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(+id, updateCarDto);
  }

  @ApiOperation({ summary: "Avtomobil ma'lumotini o'chirish" })
  @ApiParam({ name: "id", description: "Avtomobil ID" })
  @ApiResponse({ status: 200, description: "Avtomobil o'chirildi" })
  @ApiResponse({ status: 404, description: "Avtomobil topilmadi" })
  @UseGuards(AdminAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.carService.remove(+id);
  }
}
