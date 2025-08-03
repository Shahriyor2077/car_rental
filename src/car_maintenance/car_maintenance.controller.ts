import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarMaintenanceService } from './car_maintenance.service';
import { CreateCarMaintenanceDto } from './dto/create-car_maintenance.dto';
import { UpdateCarMaintenanceDto } from './dto/update-car_maintenance.dto';

@Controller('car-maintenance')
export class CarMaintenanceController {
  constructor(private readonly carMaintenanceService: CarMaintenanceService) {}

  @Post()
  create(@Body() createCarMaintenanceDto: CreateCarMaintenanceDto) {
    return this.carMaintenanceService.create(createCarMaintenanceDto);
  }

  @Get()
  findAll() {
    return this.carMaintenanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carMaintenanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarMaintenanceDto: UpdateCarMaintenanceDto) {
    return this.carMaintenanceService.update(+id, updateCarMaintenanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carMaintenanceService.remove(+id);
  }
}
