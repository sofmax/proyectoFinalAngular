import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {QuienesSomosComponent} from './quienes-somos/quienes-somos.component';
//import {ProductsComponent} from './products/products.component';
import {Products2Component} from './products2/products2.component'
import {ContactComponent} from './contact/contact.component';

 //const routes: Routes = [];

 const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},

  { path: 'quienes', component: QuienesSomosComponent},
  { path: 'productos', component: Products2Component},



  { path: 'contacto', component: ContactComponent},

  

];


// const routes: Routes = [

//   { path: '', redirectTo: '/home', pathMatch: 'full'},
//   { path: 'home',component: HomeComponent },

//   { path: 'products2', component: Products2Component },
//   { path: 'contact', component: ContactComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
