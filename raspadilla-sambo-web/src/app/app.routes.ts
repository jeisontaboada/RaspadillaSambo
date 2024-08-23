import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { CremasComponent } from './pages/cremas/cremas.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { TamanioComponent } from './pages/tamanio/tamanio.component';
import { ComandaComponent } from './pages/comanda/comanda.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [authGuard],
    children: [
      { path: 'cremas', component: CremasComponent },
      { path: 'tamanio', component: TamanioComponent },
      { path: 'comanda', component: ComandaComponent },
    ],
  },

  { path: '**', redirectTo: 'menu' },
];
