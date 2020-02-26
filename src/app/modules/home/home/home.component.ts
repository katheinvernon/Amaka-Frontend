import { Component, OnInit } from '@angular/core';

export interface product {
  img: string;
  name: string;
  // selected: boolean;
  type: string;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  products: product[] = [{
    img: 'https://http2.mlstatic.com/mega-curso-elaboracion-de-quesos-casero-productos-lacteos-D_NQ_NP_766893-MLV31252305217_062019-F.jpg',
    name: 'hola',
    type: 'queso',
    price: 123,
  }, 
{
  img: 'https://http2.mlstatic.com/mega-curso-elaboracion-de-quesos-casero-productos-lacteos-D_NQ_NP_766893-MLV31252305217_062019-F.jpg',
    name: 'hola',
    type: 'queso',
    price: 123,
}, {
  img: 'https://http2.mlstatic.com/mega-curso-elaboracion-de-quesos-casero-productos-lacteos-D_NQ_NP_766893-MLV31252305217_062019-F.jpg',
    name: 'hola',
    type: 'queso',
    price: 123,
}, {
  img: 'https://http2.mlstatic.com/mega-curso-elaboracion-de-quesos-casero-productos-lacteos-D_NQ_NP_766893-MLV31252305217_062019-F.jpg',
    name: 'hola',
    type: 'queso',
    price: 123,
}, {
  img: 'https://http2.mlstatic.com/mega-curso-elaboracion-de-quesos-casero-productos-lacteos-D_NQ_NP_766893-MLV31252305217_062019-F.jpg',
    name: 'hola',
    type: 'queso',
    price: 123,
}];

  ngOnInit(): void {
  }

}
