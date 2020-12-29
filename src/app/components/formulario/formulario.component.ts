import { Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, OnChanges {

  @Input() nombre:string="";
  constructor() { }

  ngOnInit()
  {}

  ngOnChanges(changes:SimpleChanges):void {
    for (let propName in changes){
      let chng=changes[propName];
      let cur=JSON.stringify(chng.currentValue);
      let prev=JSON.stringify(chng.previousValue);
      console.log("Valor Actual "+cur,"Valor Previo "+prev);

    }
  }

}
