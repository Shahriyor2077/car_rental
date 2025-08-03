import { Injectable} from '@nestjs/common';

import { UpdatePaymentsDto } from './dto/update-payment.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentsDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly prismaService: PrismaService){}
  create(createPaymentDto: CreatePaymentsDto) {
    return this.prismaService.payments.create({data: createPaymentDto});
  }

  findAll() {
    return this.prismaService.payments.findMany();
  }

  findOne(id: number) {
    return this.prismaService.payments.findUnique({where: {id}});
  }

  update(id: number, updatePaymentDto: UpdatePaymentsDto) {
    return this.prismaService.payments.update({where: {id}, data: updatePaymentDto});
  }

  remove(id: number) {
    return this.prismaService.payments.delete({where: {id}});
  }
}
