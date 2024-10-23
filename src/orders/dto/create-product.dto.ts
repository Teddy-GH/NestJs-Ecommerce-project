import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class OrderProductsDto {
  @IsNotEmpty({ message: 'Product id is required' })
  id: number;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'Price should be a number & max decimal precission 2' },
  )
  @IsPositive({ message: 'Price  should be positive' })
  product_unit_price: number;

  @IsNumber(
    {},
    {
      message: 'Product quantity should be a number & max decimal precission 2',
    },
  )
  @IsPositive({ message: 'Product quantity  should be positive' })
  product_quantity: number;
}
