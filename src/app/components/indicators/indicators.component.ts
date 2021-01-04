import { Component, OnInit } from '@angular/core';

import {Indicador  } from "./../../models/indicador";
import {TipoIndicador  } from "./../../models/tipoIndicador";
import {IndicatorService } from "./../../core/service/indicator.service";

import { Dolar  } from "./../../models/dolar";
import { Key } from 'protractor';


@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {

  //indicators: TipoIndicador;
  
  dolar;

  listIndicator = [];
  indicators: TipoIndicador ;
  indicatorDolar : TipoIndicador ;
  indicatorEuro : TipoIndicador ;
  indicatorBitcoin : TipoIndicador ;
  indicatorIpc : TipoIndicador ;

  constructor(
    public indicatorService: IndicatorService
  ) { }

  ngOnInit() {
    this.fechIndicators();
    this.fechGetDolar();
    
  }

  fechGetDolar(){
    this.indicatorService.getDolarActual()
    .subscribe(datos => {
      console.log(datos);
      this.dolar= datos['Dolares'];

    })
  }

  fechIndicators(){
    this.indicatorService.getAllIndicator()
    .subscribe(datos => {
     console.log( datos);
   this.indicators = datos['uf'];
   this.indicatorDolar = datos['dolar'];
   this.indicatorEuro = datos['euro'];
   this.indicatorBitcoin = datos['bitcoin'];
   this.indicatorIpc = datos['ipc'];
     
    }
      )

  }

  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
 }


}
