import { Module } from '@nestjs/common';
import { AdditionalCostsService } from './additional-costs.service';
import { AdditionalCostsController } from './additional-costs.controller';

@Module({
  controllers: [AdditionalCostsController],
  providers: [AdditionalCostsService],
})
export class AdditionalCostsModule {}
