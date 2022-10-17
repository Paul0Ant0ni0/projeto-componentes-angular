import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {


  listabolos = [{
    nome: 'Bolo de cenoura',
    img: '..//../assets/img/img1.png',
    preco: 5.80
  },
  {
    nome: 'Bolo de limão',
    img: '..//../assets/img/img3.png',
    preco: 9.55
  },
  {
    nome: 'Bolo formigueiro',
    img: '..//../assets/img/img5.png',
    preco: 9.55
  },
  {
    nome: 'Bolo de laranja',
    img: '..//../assets/img/img7.png',
    preco: 5.80
  },
  {
    nome: 'Bolo choco mousse',
    img: '..//../assets/img/img2.png',
    preco: 9.55
  },
  {
    nome: 'Bolo mármore',
    img: '..//../assets/img/img4.png',
    preco: 9.55
  },
  {
    nome: 'Bolo nozes com passas',
    img: '..//../assets/img/img6.png',
    preco: 9.55
  },
  {
    nome: 'Bolo de fubá',
    img: '..//../assets/img/img8.png',
    preco: 9.55
  }]

  ngOnInit(): void {
  }

}
