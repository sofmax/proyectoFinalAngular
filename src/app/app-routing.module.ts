import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {QuienesSomosComponent} from './quienes-somos/quienes-somos.component';
import {Products2Component} from './products2/products2.component';
import {IndicadoresComponent} from './indicadores/indicadores.component';
import {LayoutComponent} from './layout/layout.component'

import {ContactComponent} from './contact/contact.component';

import {LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {VerifyemailComponent} from './components/auth/verifyemail/verifyemail.component';

import {AuthGuard} from "./auth.guard";


 //const routes: Routes = [];

 const routes: Routes = [
  { path: '', component: LayoutComponent, 
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
      { path: 'quienes', component: QuienesSomosComponent, canActivate: [AuthGuard] },
      { path: 'productos', component: Products2Component, canActivate: [AuthGuard] },
      { path: 'contacto', component: ContactComponent,canActivate: [AuthGuard] },
      { path: 'indicadores', component: IndicadoresComponent, canActivate: [AuthGuard] },
    ]
  },
 
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'verifyemail', component: VerifyemailComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
