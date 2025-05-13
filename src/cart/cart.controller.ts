import {
    Body,
    Controller,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { UserId } from 'src/decorators/user-id.decorator';
import { Roles } from '../decorators/roles.drcorator';
import { UserType } from '../user/enum/user-type.enum';
import { CartService } from './cart.service';
import { InsertCartDto } from './dtos/insert-cart.dto';
import { CartEntity } from './entities/cart.entity';

@Roles(UserType.User, UserType.Admin)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createCart(
    @Body() insertCart: InsertCartDto,
    @UserId() userId: number,
  ): Promise<CartEntity> {
    return this.cartService.insertProductInCart(insertCart, userId);
  }
}
