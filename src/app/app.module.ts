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
<<<<<<< HEAD
import {LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent} from './components/auth/register/register.component';

// Firebase services 
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Auth service
import { AuthService } from "./core/service/auth.service";
import { VerifyemailComponent } from './components/auth/verifyemail/verifyemail.component';
=======
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { IndicatorComponent } from './components/indicator/indicator.component';



>>>>>>> aff0316829c8b8181f6657272e41401a9293eeb4


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
<<<<<<< HEAD
    LoginComponent,
    RegisterComponent,
    VerifyemailComponent
=======
    IndicadoresComponent,
    IndicatorsComponent,
    IndicatorComponent
>>>>>>> aff0316829c8b8181f6657272e41401a9293eeb4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
<<<<<<< HEAD
    AngularFirestoreModule
=======
    AngularFireStorageModule,
    HttpClientModule
>>>>>>> aff0316829c8b8181f6657272e41401a9293eeb4
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})


export class AppModule { }
