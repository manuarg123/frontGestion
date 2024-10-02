import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private readonly router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');

    if (token && expirationDate) {
      const currentTime = new Date().getTime();
      const expirationTime = parseInt(expirationDate, 10);
      if (currentTime < expirationTime) {
        return true; 
      }
    }
    
    this.router.navigate(['/login']);
    return false;
  }
}

export const canActivateRoute: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthGuard).canActivate();
};