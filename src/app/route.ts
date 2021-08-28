import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'contact' , component: ContactComponent },
  { path: 'error' , component: ErrorComponent },
  { path: 'product' , component: ProductComponent },
  { path: '' , redirectTo: 'home', pathMatch: "full" },
  { path: '**' , component: ErrorComponent },
];

export class Route {

}