import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  create(data: { asset_id: string; price: number }) {
    return this.prismaService.order.create({
      data: {
        asset_id: data.asset_id,
        price: data.price,
        status: OrderStatus.Open,
      },
    });
  }

  all() {
    return this.prismaService.order.findMany();
  }
}
