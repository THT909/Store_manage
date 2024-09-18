import { Injectable } from '@nestjs/common';
import { CreateAdditionalCostDto } from './dto/create-additional-cost.dto';
import { UpdateAdditionalCostDto } from './dto/update-additional-cost.dto';

@Injectable()
export class AdditionalCostsService {
  create(createAdditionalCostDto: CreateAdditionalCostDto) {
    return 'This action adds a new additionalCost';
  }

  findAll() {
    return `This action returns all additionalCosts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} additionalCost`;
  }

  update(id: number, updateAdditionalCostDto: UpdateAdditionalCostDto) {
    return `This action updates a #${id} additionalCost`;
  }

  remove(id: number) {
    return `This action removes a #${id} additionalCost`;
  }
}
