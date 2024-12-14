// auth.guard.ts
import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { first, firstValueFrom } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  try {
    const isAuthenticated = await firstValueFrom(authService.isAuthenticated.pipe(first()));
    if (!isAuthenticated) {
      router.navigate(['/login']);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Authentication check failed:', error);
    router.navigate(['/login']);
    return false;
  }
};
