import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('Events tickets reservation API')
    .setVersion('1.0')
    .addTag('venues')
    .addTag('events')
    .addTag('eventCategories')
    .addTag('ticketCategories')
    .addTag('tickets')
    .addTag('userCategories')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
