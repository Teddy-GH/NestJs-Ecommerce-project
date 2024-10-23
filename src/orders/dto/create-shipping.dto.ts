import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateShippingDto {
  @IsNotEmpty({ message: 'Phone number is required' })
  @IsString({ message: 'Phone number format should be string' })
  phone: string;

  @IsOptional()
  @IsString({ message: 'Name should be in string format' })
  name: string;

  @IsNotEmpty({ message: 'Address  is required' })
  @IsString({ message: 'Address  format should be string' })
  address: string;

  @IsNotEmpty({ message: 'City  is required' })
  @IsString({ message: 'City  format should be string' })
  city: string;

  @IsNotEmpty({ message: 'Post code  is required' })
  @IsString({ message: 'Post code format should be string' })
  postCode: string;

  @IsNotEmpty({ message: 'State is required' })
  @IsString({ message: 'State format should be string' })
  state: string;

  @IsNotEmpty({ message: 'Country is required' })
  @IsString({ message: 'Country format should be string' })
  country: string;
}
