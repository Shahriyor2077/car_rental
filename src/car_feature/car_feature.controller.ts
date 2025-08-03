import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarFeatureService } from './car_feature.service';
import { CreateCarFeatureDto } from './dto/create-car_feature.dto';
import { UpdateCarFeatureDto } from './dto/update-car_feature.dto';

@Controller('car-feature')
export class CarFeatureController {
  constructor(private readonly carFeatureService: CarFeatureService) {}

  @Post()
  create(@Body() createCarFeatureDto: CreateCarFeatureDto) {
    return this.carFeatureService.create(createCarFeatureDto);
  }

  @Get()
  findAll() {
    return this.carFeatureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carFeatureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarFeatureDto: UpdateCarFeatureDto) {
    return this.carFeatureService.update(+id, updateCarFeatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carFeatureService.remove(+id);
  }
}
