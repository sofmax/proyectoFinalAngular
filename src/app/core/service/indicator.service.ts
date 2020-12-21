import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Indicador } from './../../models/indicador';
import { Dolar } from './../../models/dolar';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  constructor(
    private http: HttpClient
  ) { }

  getAllIndicator(){
    return this.http.get<Indicador>('https://mindicador.cl/api');
  }

  getDolarActual(){
    return this.http.get('https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=7550c49e4d5617098ae2fb14bb3be71fca29dabd&formato=json');

  }
}


