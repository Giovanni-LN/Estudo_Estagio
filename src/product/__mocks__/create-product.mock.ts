import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDTO } from '../dtos/create-product.dto';

export const createProductMock: CreateProductDTO = {
  categoryId: categoryMock.id,
  name: 'Product Name',
  image: 'https://example.com/image.jpg',
  price: 25.0,
};
