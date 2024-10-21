import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'title is required' })
  @IsString({ message: 'title should not be empty' })
  title: string;

  @IsNotEmpty({ message: 'description is required' })
  @IsString({ message: 'description should not be empty' })
  description: string;
}
