import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {QuienesSomosComponent} from './quienes-somos/quienes-somos.component';

import {Products2Component} from './products2/products2.component'
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent} from './components/auth/register/register.component';

import {AuthGuard} from "./auth.guard";


 //const routes: Routes = [];

 const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  //{ path: 'home', component: HomeComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'quienes', component: QuienesSomosComponent},
  { path: 'productos', component: Products2Component},
  { path: 'contacto', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
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
