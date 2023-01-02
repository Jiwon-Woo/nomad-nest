import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 아무 decorator가 없는 속성을 개체를 거른다 ?
      forbidNonWhitelisted: true, // 예상치 못한 입력값이 있는 요청을 막음
      transform: true, // strnig으로만 받을 수 있는 Query나 Params 같은 것을 유저가 원하는 타입으로 변경해줌
    }),
  );
  await app.listen(3000);
}
bootstrap();
