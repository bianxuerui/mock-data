import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',  // 允许所有源访问
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',  // 允许的HTTP方法
    credentials: true,  // 如果需要传递 cookie，可设置为 true
  });
  await app.listen(8080);
}
bootstrap();
