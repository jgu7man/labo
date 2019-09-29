import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lavanderias: any[] = [
    {
      nombre: 'lavandería1',
      perfil: '../../../../../assets/img/lavanderia (1).jpg',
      precio: '13'
    },
    {
      nombre: 'lavandería2',
      perfil: '../../../../../assets/img/lavanderia (2).jpg',
      precio: '14'
    },
    {
      nombre: 'lavandería3',
      perfil: '../../../../../assets/img/lavanderia (3).png',
      precio: '15'
    },
  ]

}
