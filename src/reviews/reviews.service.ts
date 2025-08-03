import { Injectable } from '@nestjs/common';
import { CreateReviewsDto } from './dto/create-review.dto';
import { UpdateReviewsDto } from './dto/update-review.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private readonly prismaService: PrismaService){}
  create(createReviewDto: CreateReviewsDto) {
    return this.prismaService.reviews.create({data: createReviewDto});
  }

  findAll() {
    return this.prismaService.reviews.findMany();
  }

  findOne(id: number) {
    return this.prismaService.reviews.findUnique({where: {id}});
  }

  update(id: number, updateReviewDto: UpdateReviewsDto) {
    return this.prismaService.reviews.update({where: {id}, data: updateReviewDto});
  }

  remove(id: number) {
    return this.prismaService.reviews.delete({where: {id}});
  }
}
