import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { AuthGuard } from 'src/utility/guards/auth.guard';
import { AuthorizeGuard } from 'src/utility/guards/authorization.guard';
import { Roles } from 'src/utility/common/user-roles.enum';
import { CurrentUser } from 'src/utility/decorators/current-user.decorator';
import { UserEntity } from 'src/users/entities/user.entity';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}
  
  @UseGuards(AuthGuard)
  @Post()
 async create(@Body() createReviewDto: CreateReviewDto, @CurrentUser() currentUser:UserEntity) {
    return this.reviewsService.create(createReviewDto, currentUser);
  }

  @Get('/all')
 async findAll() {
    return await this.reviewsService.findAll();
  }

  @Get()
 async findAllByProduct(@Body('productId') productId: number) {
    return await this.reviewsService.findAllByProduct(+productId);
  }

  @Get(':id')
 async findOne(@Param('id') id: string) {
    return await this.reviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update(+id, updateReviewDto);
  }

  @UseGuards(AuthGuard, AuthorizeGuard([Roles.ADMIN]))
  @Delete(':id')
 async remove(@Param('id') id: string) {
    return await this.reviewsService.remove(+id);
  }
}
