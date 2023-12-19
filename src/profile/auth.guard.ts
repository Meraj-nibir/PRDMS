import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;

    if (!token) {
      return false;
    }

    try {
      const decoded = this.jwtService.verify(token);
      request.userId = decoded.id; // Set the user ID in the request for later use
      return true;
    } catch (err) {
      return false;
    }
  }
}
