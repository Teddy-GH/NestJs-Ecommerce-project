import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'title is required' })
  @IsString({ message: 'title should not be empty' })
  title: string;

  @IsNotEmpty({ message: 'description is required' })
  @IsString({ message: 'description should not be empty' })
  description: string;

  @IsNotEmpty({ message: 'price is required' })
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'price should be number & max precision 2' },
  )
  @IsPositive({ message: 'price should be positive' })
  price: number;

  @IsNotEmpty({ message: 'stock is required' })
  @IsNumber({}, { message: 'stock should be number ' })
  @Min(0, { message: 'stock cannot be negative' })
  stock: number;

  @IsNotEmpty({ message: 'images is required' })
  @IsArray({ message: 'images should be in array format' })
  images: string[];

  @IsNotEmpty({ message: 'category is required' })
  @IsNumber({}, { message: 'category id should be number ' })
  categoryId: number;
}
