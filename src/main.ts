
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import * as cookieParser from 'cookie-parser';
// import { PrismaService } from './prisma/prisma.service';
// import { AdminRole } from '../generated/prisma';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   const prisma = app.get(PrismaService);
//   await prisma.$connect();

//    // Manager yaratilgan
//   const managerEmail = 'manager@mail.com';
//   const managerPassword = '12345678';
//   const existingManager = await prisma.user.findUnique({
//     where: { email: managerEmail },
//   });

//   if (!existingManager) {
//     await prisma.admin.create({
//       data: {
//         full_name: 'Super Manager',
//         email: managerEmail,
//         password: managerPassword,
//         role: AdminRole.MANAGER,
//       },
//     });
//     console.log('✅ Manager yaratildi!');
//   } else {
//     console.log('ℹ️ Manager allaqachon mavjud.');
//   }

//   app.use(cookieParser());
//   app.setGlobalPrefix('api');
//   app.useGlobalPipes(new ValidationPipe());

//   const config = new DocumentBuilder()
//     .setTitle('Avto Ijara loyihasi')
//     .setDescription('NestJS + Prisma REST API')
//     .setVersion('1.0')
//     .addBearerAuth()
//     .build();

//   const document = SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('/api/docs', app, document);

//   const PORT = process.env.PORT || 3000;
//   await app.listen(PORT, () => {
//     console.log(`🚀 Server http://localhost:${PORT}`);
//     console.log(`📘 Swagger http://localhost:${PORT}/api/docs`);
//   });
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { PrismaService } from './prisma/prisma.service';
import { AdminRole } from '../generated/prisma';
import { WinstonLoggerService } from './common/logger/winston-logger.service';
import { AllExceptionsFilter } from './common/errors/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  const logger = app.get(WinstonLoggerService);
  app.useLogger(logger);

  const prisma = app.get(PrismaService);
  await prisma.$connect();

  // ✅ Admin modeldan manager tekshiruv
  const managerEmail = 'manager@mail.com';
  const managerPassword = '12345678';

  const existingManager = await prisma.admin.findUnique({
    where: { email: managerEmail },
  });

  if (!existingManager) {
    await prisma.admin.create({
      data: {
        full_name: 'Super Manager',
        email: managerEmail,
        password: managerPassword, // ❗ Parolni xohlasangiz hash qiling
        role: AdminRole.MANAGER,
      },
    });
    logger.log('✅ Manager yaratildi!', 'Bootstrap');
  } else {
    logger.log('ℹ️ Manager allaqachon mavjud.', 'Bootstrap');
  }

  app.use(cookieParser());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  // Global Exception Filter
  app.useGlobalFilters(new AllExceptionsFilter(logger));

  const config = new DocumentBuilder()
    .setTitle('Avto Ijara loyihasi')
    .setDescription('NestJS + Prisma REST API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  const PORT = process.env.PORT || 3030;
  await app.listen(PORT, () => {
    logger.log(`🚀 Server http://localhost:${PORT}`, 'Bootstrap');
    logger.log(`📘 Swagger http://localhost:${PORT}/api/docs`, 'Bootstrap');
  });
}
bootstrap();
