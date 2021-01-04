import {
  Component,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
  } from '@angular/core';


  @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 
  export class HomeComponent
  implements
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  
  public nombre:string="";
  public valor:string="";

  constructor() {
  console.log(`Home Constructor `);
  }

    ngOnInit() {
  console.log(`Home ngOnInit `);
  }

  ngDoCheck():void {
  console.log('Home ngDoCheck');
  }

  ngAfterContentInit():void {
  console.log('Home ngAfterContentInit');
  }

  ngAfterContentChecked():void {
  console.log('Home ngAfterContentChecked');
  }

  ngAfterViewInit():void {
  console.log('Home ngAfterViewInit');
  }

  ngAfterViewChecked():void {
  console.log('Home ngAfterViewChecked');
  }

  ngOnDestroy():void {
  console.log('Home ngOnDestroy');
  }

}
  
  