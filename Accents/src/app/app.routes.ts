import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', title: 'Home', component: HomeComponent },
  {path: 'nav', title: 'navbar', component: NavbarComponent }
];
