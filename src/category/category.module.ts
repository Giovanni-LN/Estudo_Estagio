<<<<<<< HEAD
import { forwardRef, Module } from '@nestjs/common';
=======
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from 'src/product/product.module';
import { CategoryController } from './category.controller';
>>>>>>> ef7be204c79dd3042107038a54a47ba745d8c2bd
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { ProductModule } from '../product/product.module';

@Module({
<<<<<<< HEAD
  imports: [
    TypeOrmModule.forFeature([CategoryEntity]),
    forwardRef(() => ProductModule),
  ],
=======
  imports: [TypeOrmModule.forFeature([CategoryEntity]), ProductModule],
>>>>>>> ef7be204c79dd3042107038a54a47ba745d8c2bd
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [CategoryService],
})
export class CategoryModule {}
