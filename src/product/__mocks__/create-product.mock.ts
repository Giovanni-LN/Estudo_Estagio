import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDto } from '../dtos/create-product.dto';

export const createProductMock: CreateProductDto = {
  categoryId: categoryMock.id,
  name: 'Product Name',
  image: 'https://example.com/image.jpg',
  price: 25.0,
};
