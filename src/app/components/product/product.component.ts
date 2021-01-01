import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';
import {Product} from '../../models/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // product : Product = {
  //   id: 1,
  //   imagen: 'assets/img/product/1.jpg',
  //   title: 'Detergente OMO 5KL',
  //   categoria : 'Detergente Ropa',
  //   descripcion: 'Detergente de 1kg ropa blanca y color',
  //   price: 3000,
  // }

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart() {
    console.log("producto agregado")
    this.productClicked.emit(this.product.id)
  }

  contador(i:number){
    return new Array(i);
  }

  contador2(i:number){
    return new Array(5-i);
  }

  constructor() { }

  ngOnInit() {
  }

}
