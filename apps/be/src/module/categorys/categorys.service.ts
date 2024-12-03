import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './entities/category.entity';
import { Model, Types } from 'mongoose';

@Injectable()
export class CategorysService {
  constructor(
    @InjectModel(Category.name) readonly categoryModel: Model<CategoryDocument>
  ) {}
  async create(body: CreateCategoryDto) {
    const data = await this.categoryModel.findOne({
      $or: [
        { name: body.name },
        { _id: { $ne: new Types.ObjectId(body.prarentId) } },
      ],
    });
    return this.categoryModel.create(body);
  }

  findAll() {
    return;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
