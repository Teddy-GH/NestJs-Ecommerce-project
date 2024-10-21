import {
  CanActivate,
  ExecutionContext,
  Injectable,
  mixin,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

// @Injectable()
// export class AuthorizeGuard implements CanActivate {
//   constructor(private refelector: Reflector) {}
//   canActivate(context: ExecutionContext): boolean {
//     const roles = this.refelector.get<string[]>('roles', context.getHandler());
//     const request = context.switchToHttp().getRequest();

//     const result = request.currentUser?.roles
//       .map((role: string) => roles.includes(role))
//       .find((val: boolean) => val === true);

//     if (result) return true;
//     throw new UnauthorizedException('Sorry, you are not authorized');
//   }
// }



export const AuthorizeGuard = (roles:string[]) => {
    class RolesGuardMixin implements CanActivate {
        canActivate(context: ExecutionContext): boolean {
            const request = context.switchToHttp().getRequest();
            const result = request.currentUser?.roles
              .map((role: string) => roles.includes(role))
              .find((val: boolean) => val === true);
            if (result) return true;
            throw new UnauthorizedException('Sorry, you are not authorized');
        }
    }

    const guard = mixin(RolesGuardMixin);
    return guard;
}



