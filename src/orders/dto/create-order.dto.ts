import { Type } from 'class-transformer';
import { CreateShippingDto } from './create-shipping.dto';
import { ValidateNested } from 'class-validator';
import { OrderProductsDto } from './create-product.dto';

export class CreateOrderDto {
  @Type(() => CreateShippingDto)
  @ValidateNested()
  shippingAddress: CreateShippingDto;

  @Type(() => OrderProductsDto)
  @ValidateNested()
  orderedProducts: OrderProductsDto[];
}
