import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RentalService } from './rental.service';
import { CreateRentalsDto } from './dto/create-rental.dto';
import { UpdateRentalsDto } from './dto/update-rental.dto';


@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Post()
  create(@Body() createRentalDto: CreateRentalsDto) {
    return this.rentalService.create(createRentalDto);
  }

  @Get()
  findAll() {
    return this.rentalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentalDto: UpdateRentalsDto) {
    return this.rentalService.update(+id, updateRentalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalService.remove(+id);
  }
}
