import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertCartDto } from 'src/cart/dtos/insert-cart.dto';
import { CartEntity } from 'src/cart/entities/cart.entity';
import { ProductService } from 'src/product/product.service';
import { Repository } from 'typeorm';
import { CartProductEntity } from './entities/cart-product.entity';

@Injectable()
export class CartProductService {
  constructor(
    @InjectRepository(CartProductEntity)
    private readonly cartProductrepository: Repository<CartProductEntity>,
    private readonly productService: ProductService,
  ) {}

  async verifyProductInCart(
    productId: number,
    cartId: number,
  ): Promise<CartProductEntity> {
    const cartProduct = await this.cartProductrepository.findOne({
      where: {
        productId,
        cartId,
      },
    });

    if (!cartProduct) {
      throw new NotFoundException('Product not found in cart');
    }

    return cartProduct;
  }

  async createProductInCart(
    insertCardDto: InsertCartDto,
    cartId: number,
  ): Promise<CartProductEntity> {
    return this.cartProductrepository.save({
      amount: insertCardDto.amount,
      productId: insertCardDto.productId,
      cartId,
    });
  }

  async insertProductInCart(
    insertCardDto: InsertCartDto,
    cart: CartEntity,
  ): Promise<CartProductEntity> {
    await this.productService.findProductById(insertCardDto.productId);

    const cartProduct = await this.verifyProductInCart(
      insertCardDto.productId,
      cart.id,
    ).catch(() => undefined);

    if (!cartProduct) {
      return this.createProductInCart(insertCardDto, cart.id);
    }

    return this.cartProductrepository.save({
      ...cartProduct,
      amount: cartProduct.amount + insertCardDto.amount,
    });
  }
}
