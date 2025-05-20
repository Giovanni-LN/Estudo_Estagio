import { categoryMock } from '../../category/__mocks__/category.mock';
import { UpdateProductDTO } from '../dtos/update-product.dto';

export const updateProductMock: UpdateProductDTO = {
  categoryId: categoryMock.id,
  name: 'Product Name2',
  image: 'https://example.com/image2.jpg',
  price: 43.0,
};
