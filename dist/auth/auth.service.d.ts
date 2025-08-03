import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { MailService } from '../mail/mail.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
export declare class AuthService {
    private readonly prismaService;
    private readonly jwtService;
    private readonly userService;
    private readonly mailService;
    constructor(prismaService: PrismaService, jwtService: JwtService, userService: UserService, mailService: MailService);
    private generateTokens;
    register(dto: CreateUserDto): Promise<{
        message: string;
    }>;
    activate(link: string): Promise<{
        message: string;
    }>;
    login(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(): Promise<{
        message: string;
    }>;
    refreshToken(oldRefreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
