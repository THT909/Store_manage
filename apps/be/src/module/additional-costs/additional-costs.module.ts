import { Module } from '@nestjs/common';
import { AdditionalCostsService } from './additional-costs.service';
import { AdditionalCostsController } from './additional-costs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AdditionalCost,
  AdditionalCostSchema,
} from './entities/additional-cost.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AdditionalCost.name,
        schema: AdditionalCostSchema,
      },
    ]),
  ],
  controllers: [AdditionalCostsController],
  providers: [AdditionalCostsService],
})
export class AdditionalCostsModule {}
