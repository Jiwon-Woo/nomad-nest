import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [MoviesModule, TypeOrmModule.forRoot(typeORMConfig), BoardsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
