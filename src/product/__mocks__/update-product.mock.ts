import { categoryMock } from '../../category/__mocks__/category.mock';
import { UpdateProductDto } from '../dtos/update-product.dto';

export const updateProductMock: UpdateProductDto = {
  categoryId: categoryMock.id,
  name: 'Product Name2',
  image: 'https://example.com/image2.jpg',
  price: 43.0,
};
