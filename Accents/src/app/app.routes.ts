import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  {path: '', title: 'Home', component: HomeComponent },
  {path: 'nav', title: 'navbar', component: NavbarComponent },
  {path: 'products', title: 'products', component: ProductsComponent },
  {path: 'contact', title: 'contact', component: ContactComponent }
];
