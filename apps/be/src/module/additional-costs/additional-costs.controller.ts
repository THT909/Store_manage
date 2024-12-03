import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdditionalCostsService } from './additional-costs.service';
import { CreateAdditionalCostDto } from './dto/create-additional-cost.dto';
import { UpdateAdditionalCostDto } from './dto/update-additional-cost.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Additional Costs')
@Controller('additional-costs')
export class AdditionalCostsController {
  constructor(
    private readonly additionalCostsService: AdditionalCostsService
  ) {}

  @Post()
  create(@Body() createAdditionalCostDto: CreateAdditionalCostDto) {
    return this.additionalCostsService.create(createAdditionalCostDto);
  }

  @Get()
  findAll() {
    return this.additionalCostsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.additionalCostsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdditionalCostDto: UpdateAdditionalCostDto
  ) {
    return this.additionalCostsService.update(+id, updateAdditionalCostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.additionalCostsService.remove(+id);
  }
}
