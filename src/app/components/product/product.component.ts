import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = {
    id: '1',
    imagen: 'assets/images/1.jpg',
    title: 'Detergente OMO',
    categoria : 'Detergente',
    descripcion: 'Detergente de 1kg ropa blanca y color',
    price: 3000,
  }

  constructor() { }

  ngOnInit() {
  }

}
