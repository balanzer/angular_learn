import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(route) {

    console.log('Checking user access to route...', route);

    if (this.authService.currentUserHasAccessTo(route)) {
      return true;
    } else {
      console.log('User does not have access to route -- redirecting...');
      this.router.navigate(['/forbidden']);
    }

  }
}
