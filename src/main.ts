import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(express()), // Use Express as the underlying framework
  );

  // Configure CORS options
  const corsOptions: CorsOptions = {
    origin: '*', // Replace with the domain of your Next.js app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (e.g., cookies) to be sent with the request
  };

  // Enable CORS using the configured options
  app.enableCors(corsOptions);

  await app.listen(5000);
}

bootstrap();