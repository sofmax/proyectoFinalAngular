import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {QuienesSomosComponent} from './quienes-somos/quienes-somos.component';
import {Products2Component} from './products2/products2.component'
import {ContactComponent} from './contact/contact.component';
<<<<<<< HEAD
import {LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {VerifyemailComponent} from './components/auth/verifyemail/verifyemail.component';

import {AuthGuard} from "./auth.guard";

=======
import {IndicadoresComponent} from './indicadores/indicadores.component'
>>>>>>> aff0316829c8b8181f6657272e41401a9293eeb4

 //const routes: Routes = [];

 const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'quienes', component: QuienesSomosComponent},
  { path: 'productos', component: Products2Component},
<<<<<<< HEAD
=======
  { path: 'indicadores', component: IndicadoresComponent},

>>>>>>> aff0316829c8b8181f6657272e41401a9293eeb4
  { path: 'contacto', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'verifyemail', component: VerifyemailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
