import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarImagesService } from './car_images.service';
import { CreateCarImagesDto } from './dto/create-car_image.dto';
import { UpdateCarImagesDto } from './dto/update-car_image.dto';

@Controller('car-images')
export class CarImagesController {
  constructor(private readonly carImagesService: CarImagesService) {}

  @Post()
  create(@Body() createCarImageDto: CreateCarImagesDto) {
    return this.carImagesService.create(createCarImageDto);
  }

  @Get()
  findAll() {
    return this.carImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarImageDto: UpdateCarImagesDto) {
    return this.carImagesService.update(+id, updateCarImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carImagesService.remove(+id);
  }
}
