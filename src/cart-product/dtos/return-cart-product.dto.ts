<<<<<<< HEAD
import { ReturnCartDTO } from '../../cart/dtos/return-cart.dto';
=======
import { ReturnCartDto } from '../../cart/dtos/return-cart.dto';
>>>>>>> ef7be204c79dd3042107038a54a47ba745d8c2bd
import { ReturnProduct } from '../../product/dtos/return-product.dto';
import { CartProductEntity } from '../entities/cart-product.entity';

export class ReturnCartProductDTO {
  id: number;
  cartId: number;
  productId: number;
  amount: number;
<<<<<<< HEAD
  product?: ReturnProduct;
  cart?: ReturnCartDTO;
=======

  product?: ReturnProduct;
  cart?: ReturnCartDto;
>>>>>>> ef7be204c79dd3042107038a54a47ba745d8c2bd

  constructor(cartProduct: CartProductEntity) {
    this.id = cartProduct.id;
    this.cartId = cartProduct.cartId;
    this.productId = cartProduct.productId;
    this.amount = cartProduct.amount;
    this.product = cartProduct.product
      ? new ReturnProduct(cartProduct.product)
      : undefined;
    this.cart = cartProduct.cart
      ? new ReturnCartDTO(cartProduct.cart)
      : undefined;
  }
}
