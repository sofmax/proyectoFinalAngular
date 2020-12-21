import { Component, OnInit } from '@angular/core';

import {Indicador  } from "./../../models/indicador";
import {TipoIndicador  } from "./../../models/tipoIndicador";
import {IndicatorService } from "./../../core/service/indicator.service";

import { Dolar  } from "./../../models/dolar";


@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {

  indicators :TipoIndicador[];
  dolar;

  
  listIndicator = [];
  constructor(
    public indicatorService: IndicatorService
  ) { }

  ngOnInit() {
    // this.fechIndicators();
    this.fechGetDolar();
    
  }

  fechGetDolar(){
    this.indicatorService.getDolarActual()
    .subscribe(datos => {
      console.log(datos);
      this.dolar= datos['Dolares'];

    })
  }

 



  // fechIndicators(){
  //   this.indicatorService.getAllIndicator()
  //   .subscribe(datos => {
  //     console.log(datos);
  //    // this.indicators= datos;
  //     // this.indicators.codigo=datos.dolar.codigo;
       
  //     this.listIndicator = this.generateArray(datos);
  //     console.log(this.listIndicator[3]);
  //     this.indicators[0]= datos.dolar;
     
  //   }
  //     )

  // }

  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
 }


  

  // fechIndicators(){
  //   this.indicatorService.getAllIndicator()
  //   .subscribe(indicators=> {
     
    
  //    this.indicators = indicators;
      
  //   }
  //     )

  // }

}
