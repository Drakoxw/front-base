import { Routes } from '@angular/router';
import { PATH } from '@constants/index';
import { authGuard } from './core/guards/auth.guard';
import { LayoutComponent } from '@shared/components';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: PATH.ROUTE_1, component: HomeComponent, canActivate: [authGuard] },
      { path: PATH.ROUTE_2, component: HomeComponent, canActivate: [authGuard] },
      { path: PATH.LOGOUT, component: LogoutComponent, canActivate: [authGuard] },
      { path: PATH.AUTH, component: LoginComponent },
      { path: '**', redirectTo: PATH.ROUTE_1, pathMatch: 'full' },
      { path: '', redirectTo: PATH.ROUTE_1, pathMatch: 'full' },
    ],
  },
];
