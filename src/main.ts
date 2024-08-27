import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { Logger, ValidationPipe } from '@nestjs/common';

const port = process.env.PORT ? parseInt(process.env.PORT) : 3006;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
  Logger.log(`Running in port ${port}`, 'main');
}

bootstrap();
