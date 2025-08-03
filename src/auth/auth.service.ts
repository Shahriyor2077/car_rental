import { Injectable, NotFoundException, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { MailService } from '../mail/mail.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly mailService: MailService,
  ) {}

  // Generate tokens (DRY principle)
  private generateTokens(payload: any) {
    const accessToken = this.jwtService.sign(payload, { expiresIn: '3d' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
    return { accessToken, refreshToken };
  }

  // 1. Register
  async register(dto: CreateUserDto) {
    const userExists = await this.prismaService.user.findUnique({ where: { email: dto.email } });
    if (userExists) throw new ForbiddenException('Bu email allaqachon ro\'yxatdan o\'tgan');
    
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const activation_link = uuidv4();
    
    const user = await this.prismaService.user.create({
      data: {
        ...dto,
        password: hashedPassword,
        activation_link,
        is_active: false,
      }
    });
    
    await this.mailService.sendMail({
      email: user.email,
      name: user.full_name,
      activation_link: activation_link
    }, 'user');
    return { message: 'Foydalanuvchi yaratildi. Emailingizni tasdiqlang.' };
  }

  // 2. Activate (email tasdiqlash)
  async activate(link: string) {
    const user = await this.prismaService.user.findFirst({ where: { activation_link: link } });
    if (!user) throw new NotFoundException('Activation link noto\'g\'ri yoki eskirgan');
    
    await this.prismaService.user.update({
      where: { id: user.id },
      data: { is_active: true, activation_link: null }
    });
    
    return { message: 'Email muvaffaqiyatli tasdiqlandi!' };
  }

  // 3. Login
  async login(email: string, password: string) {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('Email yoki parol noto\'g\'ri');
    if (!user.is_active) throw new ForbiddenException('Email tasdiqlanmagan!');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Email yoki parol noto\'g\'ri');
    
    const payload = { sub: user.id, email: user.email };
    return this.generateTokens(payload);
  }

  // 4. Logout
  async logout() {
    // Cookie controllerda o'chiriladi, serverda refresh token saqlanmaydi
    return { message: 'Logout muvaffaqiyatli' };
  }

  // 5. Refresh token
  async refreshToken(oldRefreshToken: string) {
    if (!oldRefreshToken) {
      throw new UnauthorizedException('Refresh token topilmadi');
    }

    let payload: any;
    try {
      payload = this.jwtService.verify(oldRefreshToken);
    } catch (error) {
      throw new UnauthorizedException('Refresh token noto\'g\'ri yoki eskirgan');
    }

    const user = await this.prismaService.user.findUnique({ where: { id: payload.sub } });
    if (!user) {
      throw new UnauthorizedException('Foydalanuvchi topilmadi');
    }

    const newPayload = { sub: user.id, email: user.email };
    return this.generateTokens(newPayload);
  }
}
