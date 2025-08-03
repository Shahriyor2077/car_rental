"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const prisma_service_1 = require("./prisma/prisma.service");
const prisma_1 = require("../generated/prisma");
const winston_logger_service_1 = require("./common/logger/winston-logger.service");
const all_exceptions_filter_1 = require("./common/errors/all-exceptions.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bufferLogs: true,
    });
    const logger = app.get(winston_logger_service_1.WinstonLoggerService);
    app.useLogger(logger);
    const prisma = app.get(prisma_service_1.PrismaService);
    await prisma.$connect();
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
                password: managerPassword,
                role: prisma_1.AdminRole.MANAGER,
            },
        });
        logger.log('✅ Manager yaratildi!', 'Bootstrap');
    }
    else {
        logger.log('ℹ️ Manager allaqachon mavjud.', 'Bootstrap');
    }
    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter(logger));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Avto Ijara loyihasi')
        .setDescription('NestJS + Prisma REST API')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    const PORT = process.env.PORT || 3030;
    await app.listen(PORT, () => {
        logger.log(`🚀 Server http://localhost:${PORT}`, 'Bootstrap');
        logger.log(`📘 Swagger http://localhost:${PORT}/api/docs`, 'Bootstrap');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map