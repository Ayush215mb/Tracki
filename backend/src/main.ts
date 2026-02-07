import { config } from 'dotenv';
config();
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { Logger } from '@nestjs/common';
import {TimeoutInterceptor} from "./timeout.interceptor.js";

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalInterceptors(new TimeoutInterceptor(10000));
  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true, // Strip properties that don't have decorators
        forbidNonWhitelisted: true, // Throw error if non-whitelisted values exist
        transform: true, // Transform payloads to DTO instances
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
  );  const PORT = process.env.PORT || 4000;
  app.listen(PORT).then(() => {
    logger.log(`Server listening on ${PORT}`);
  });

}
bootstrap().catch((e) => console.error(e));
