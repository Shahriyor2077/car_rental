import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class SelfGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const userId = parseInt(request.params.id);

    // Admin va Manager barcha user'larni ko'ra oladi
    if (user.role === 'ADMIN' || user.role === 'MANAGER') {
      return true;
    }

    // User faqat o'z ma'lumotlariga kirishi mumkin
    if (user.id !== userId) {
      throw new ForbiddenException('Faqat o\'z ma\'lumotlaringizga kirishingiz mumkin');
    }

    return true;
  }
} 