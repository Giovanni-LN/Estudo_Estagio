import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { InsertCartDto } from '../cart/dtos/insert-cart.dto';
import { UpdateCartDto } from '../cart/dtos/update-cart.dto copy';
import { CartEntity } from '../cart/entities/cart.entity';
import { ProductService } from '../product/product.service';
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

  async updateProductInCart(
    updateCardDto: UpdateCartDto,
    cart: CartEntity,
  ): Promise<CartProductEntity> {
    await this.productService.findProductById(updateCardDto.productId);

    const cartProduct = await this.verifyProductInCart(
      updateCardDto.productId,
      cart.id,
    );

    return this.cartProductrepository.save({
      ...cartProduct,
      amount: updateCardDto.amount,
    });
  }

  async deleteProductCart(
    productId: number,
    cartId: number,
  ): Promise<DeleteResult> {
    return this.cartProductrepository.delete({ productId, cartId });
  }
}
