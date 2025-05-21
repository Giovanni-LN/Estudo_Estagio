import { IsNumber, IsString } from 'class-validator';

export class CreateProductDTO {
<<<<<<< HEAD
  @IsNumber()
  categoryId: number;

=======
>>>>>>> ef7be204c79dd3042107038a54a47ba745d8c2bd
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  image: string;
}
