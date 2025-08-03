import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BranchService } from './branch.service';
import { UpdateBranchesDto } from './dto/update-branch.dto';
import { CreateBranchesDto } from './dto/create-branch.dto';
import { WinstonLoggerService } from '../common/logger/winston-logger.service';

@Controller('branch')
export class BranchController {
  constructor(
    private readonly branchService: BranchService,
    private readonly logger: WinstonLoggerService
  ) {}

  @Post()
  create(@Body() createBranchDto: CreateBranchesDto) {
    this.logger.log('Branch yaratish so‘rovi', 'BranchController');
    return this.branchService.create(createBranchDto);
  }

  @Get()
  findAll() {
    this.logger.log('Barcha branchlar ro‘yxati', 'BranchController');
    return this.branchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.log(`Branch olish: ${id}`, 'BranchController');
    return this.branchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBranchDto: UpdateBranchesDto) {
    this.logger.log(`Branch yangilash: ${id}`, 'BranchController');
    return this.branchService.update(+id, updateBranchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.logger.log(`Branch o‘chirish: ${id}`, 'BranchController');
    return this.branchService.remove(+id);
  }
}
