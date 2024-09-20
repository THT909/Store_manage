import { Injectable } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Promotion, PromotionDocument } from './entities/promotion.entity';
import { Model } from 'mongoose';

@Injectable()
export class PromotionsService {
  constructor(
    @InjectModel(Promotion.name)
    private readonly promotionModel: Model<PromotionDocument>
  ) {}

  create(createPromotionDto: CreatePromotionDto) {
    return 'This action adds a new promotion';
  }

  findAll() {
    return `This action returns all promotions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} promotion`;
  }

  update(id: number, updatePromotionDto: UpdatePromotionDto) {
    return `This action updates a #${id} promotion`;
  }

  remove(id: number) {
    return `This action removes a #${id} promotion`;
  }
}
