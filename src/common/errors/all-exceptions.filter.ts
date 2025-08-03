
import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    Inject,
  } from '@nestjs/common';
  import { Request, Response } from 'express';
  import { WinstonLoggerService } from '../logger/winston-logger.service';
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    constructor(
      @Inject(WinstonLoggerService)
      private readonly logger: WinstonLoggerService,
    ) {}
  
    catch(exception: unknown, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
  
      let status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
  
      let message =
        exception instanceof HttpException
          ? exception.getResponse()
          : 'Internal server error';
  
      if (typeof message === 'object' && message !== null) {
        message = (message as any).message || message;
      }
  
      this.logger.error(
        `[${request.method}] ${request.url} - ${status} - ${JSON.stringify(message)}`,
        (exception as any)?.stack,
        'ExceptionFilter',
      );
  
      response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        method: request.method,
        message,
      });
    }
  }