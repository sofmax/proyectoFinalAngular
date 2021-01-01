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
    unidad: 'Kg',
    cantidad:'9.5',
    marca:'Omo',
    star:1
  },
  {
    id: 2,
    imagen: 'assets/img//product/2.jpg',
    title: 'Detergente HomeCare',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 2600,
    unidad: 'Kg',
    cantidad:'4.43',
    marca:'Care',
    star:3
  },
  {
    id: 3,
    imagen: 'assets/img//product/3.jpg',
    title: 'Detergente Popeye',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 5000,
    unidad: 'Kg',
    cantidad:'3',
    marca:'Popeye',
    star:4
  },
  {
    id: 4,
    imagen: 'assets/img//product/4.jpg',
    title: 'Detergente Ariel',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido ',
    price: 1500,
    unidad: 'Lts',
    cantidad:'10',
    marca:'Ariel',
    star:5
  },
  {
    id: 5,
    imagen: 'assets/img//product/5.jpg',
    title: 'Detergente OMO Soft',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido ',
    price: 500,
    unidad: 'Kg',
    cantidad:'2',
    marca:'Omo',
    star:1
  },
  {
    id: 6,
    imagen: 'assets/img//product/6.jpg',
    title: 'Detergente Perwoll',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
    unidad: 'Lts',
    cantidad:'1.5',
    marca:'Perwol',
    star:3
  },
]
clickProduct(id: number){
  console.log("id es:" + id)

}

  constructor() { }

  ngOnInit() {
  }

}
