
import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";


@Injectable()
export class ManagerOnlyGuard implements CanActivate{
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request=context.switchToHttp().getRequest();
    const user=request.user;
    if(user.role!=='MANAGER'){
      throw new ForbiddenException('Faqat manager')
    }
    return true
  }
}