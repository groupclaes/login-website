import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {
    // this.auth.verify();
  }

  async canActivate(): Promise<boolean> {
    await this.auth.verify().toPromise();
    return this.auth.isAuthenticated();
  }
}
