import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

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
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { StringToDatePipe } from './string-to-date.pipe';
import { LayoutComponent } from './layout/layout.component';
import { FormularioComponent } from './components/formulario/formulario.component';

import{FormsModule}from '@angular/forms';


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
    VerifyemailComponent,
    IndicadoresComponent,
    IndicatorComponent,
    IndicatorsComponent,
    StringToDatePipe,
    LayoutComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})


export class AppModule { }
