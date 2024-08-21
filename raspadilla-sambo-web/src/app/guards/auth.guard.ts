import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const expiresAt = localStorage.getItem('expiresAt');

  if (!expiresAt) {
    alert('Debes iniciar sesión');
    router.navigateByUrl('/login');
    return false;
  }

  const fechaAt: Date = new Date(expiresAt);
  const fechaActual: Date = new Date();

  if (fechaAt < fechaActual) {
    alert('Tu sesión ha expirado');
    router.navigateByUrl('/login');
    return false;
  }
  
  return true;
};
