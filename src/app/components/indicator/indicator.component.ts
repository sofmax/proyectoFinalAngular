import { Component, OnInit, Input,Output ,EventEmitter } from '@angular/core';
import {Indicador} from "../../models/indicador";


@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {

  
  @Input() indicators: Indicador;
  //@Output() productClicked: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
