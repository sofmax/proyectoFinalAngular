import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] = [{
    id: 1,
    imagen: 'assets/img/product/1.jpg',
    title: 'Detergente OMO',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente de 1kg ropa blanca y color',
    price: 3000,
  },
  {
    id: 2,
    imagen: 'assets/img//product/2.jpg',
    title: 'Detergente HomeCare',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
  },
  {
    id: 3,
    imagen: 'assets/img//product/3.jpg',
    title: 'Detergente Popeye',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 5000,
  },
  {
    id: 4,
    imagen: 'assets/img//product/4.jpg',
    title: 'Detergente Ariel',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
  },
  {
    id: 5,
    imagen: 'assets/img//product/5.jpg',
    title: 'Detergente OMO Soft',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
  },
  {
    id: 6,
    imagen: 'assets/img//product/6.jpg',
    title: 'Detergente Perwoll',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
  },
]
clickProduct(id: number){
  console.log("id es:" + id)

}

  constructor() { }

  ngOnInit() {
  }

}
