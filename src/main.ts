import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './config/env/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT ?? 3000);
  console.log('srver start')
}
bootstrap();
