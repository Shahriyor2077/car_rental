import { LoggerService } from '@nestjs/common';
export declare class WinstonLoggerService implements LoggerService {
    private readonly logger;
    constructor();
    log(message: string, context?: string): void;
    error(message: string, trace?: string, context?: string): void;
    warn(message: string, context?: string): void;
    debug(message: string, context?: string): void;
    verbose(message: string, context?: string): void;
}
