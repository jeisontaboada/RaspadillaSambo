import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { TallasComponent } from './pages/tallas/tallas.component';
import { CremasComponent } from './pages/cremas/cremas.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [authGuard],
    children: [
      { path: 'tallas', component: TallasComponent },
      { path: 'cremas', component: CremasComponent },
    ],
  },

  { path: '**', redirectTo: 'menu' },
];
