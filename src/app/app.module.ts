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

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';

import { environment } from './../environments/environment';       
import { from } from 'rxjs';

import { HomeComponent} from './home/home.component';
import { ContactComponent} from './contact/contact.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component'
import { Products2Component } from './products2/products2.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { IndicatorComponent } from './components/indicator/indicator.component';





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
    IndicadoresComponent,
    IndicatorsComponent,
    IndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
