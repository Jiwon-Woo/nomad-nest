import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
  //   Query,
} from '@nestjs/common';

@Controller('movies') // Controller의 인수(?)가 엔트리 포인트를 컨트롤함, /movies로 가야 getAll 함수가 실행됨
export class MoviesController {
  constructor(private readonly moivesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moivesService.getAll();
  }

  //   @Get('search')
  //   search(@Query('year') seachingYear: string) {
  //     return `We are searching for a movie made after: ${seachingYear}`;
  //   }

  @Get(':id') // : 뒤의 변수명과 Param 안의 변수명은 동일해야함, 그러나 인자명은 달라도 상관없음
  getOne(@Param('id') id: number): Movie {
    return this.moivesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moivesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moivesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moivesService.update(movieId, updateData);
  }
}
