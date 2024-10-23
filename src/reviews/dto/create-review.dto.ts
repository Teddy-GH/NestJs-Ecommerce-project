import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty({ message: 'product  is required!' })
  @IsNumber({}, { message: 'product id should be number' })
  productId: number;

  @IsNotEmpty({ message: 'ratings is required!' })
  @IsNumber({}, { message: 'ratings should be number' })
  ratings: number;

  @IsNotEmpty({ message: 'comment  is required!' })
  @IsString()
  comment: string;
}
