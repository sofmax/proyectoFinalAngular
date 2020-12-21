import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';


import { environment } from './../environments/environment';       
import { from } from 'rxjs';

import { HomeComponent} from './home/home.component';
import { ContactComponent} from './contact/contact.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component'
import { Products2Component } from './products2/products2.component';
import {LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent} from './components/auth/register/register.component';

// Firebase services 
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Auth service
import { AuthService } from "./core/service/auth.service";
import { VerifyemailComponent } from './components/auth/verifyemail/verifyemail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ProductComponent,
    ProductsComponent,
    Products2Component,
    HomeComponent,
    ContactComponent,
    QuienesSomosComponent,
    LoginComponent,
    RegisterComponent,
    VerifyemailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})


export class AppModule { }
