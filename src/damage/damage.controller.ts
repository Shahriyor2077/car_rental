import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DamageService } from './damage.service';
import { CreateDamagesDto } from './dto/create-damage.dto';
import { UpdateDamagesDto } from './dto/update-damage.dto';

@Controller('damage')
export class DamageController {
  constructor(private readonly damageService: DamageService) {}

  @Post()
  create(@Body() createDamageDto: CreateDamagesDto) {
    return this.damageService.create(createDamageDto);
  }

  @Get()
  findAll() {
    return this.damageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.damageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDamageDto: UpdateDamagesDto) {
    return this.damageService.update(+id, updateDamageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.damageService.remove(+id);
  }
}
