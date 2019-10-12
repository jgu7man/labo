import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  menu = [
    {
      id: 'dashboard',
      display: 'tablero',
      icon: 'fa-columns',
      link:'',
      submenu: []
    },
    {
      id: 'clientes',
      display: 'clientes',
      icon: 'fa-users',
      link:'',
      submenu: [
        {
          id: 'colaboradores',
          display: 'colaboradores',
          icon: 'fa-users-cog',
          link:'',
        },
        {
          id: 'usuarios',
          display: 'colaboradores',
          icon: 'fa-user',
          link:'',
        },
      ]
    },
    {
      id: 'prod_cat',
      display: 'productos y categorías',
      icon: 'fa-box-open',
      link:'',
      submenu: []
    },
    {
      id: 'pedidos',
      display: 'pedidos',
      icon: 'fa-tags',
      link:'',
      submenu: [
        {
          id: 'procesados',
          display: 'tag',
          icon: 'fa-tags',
          link:'',
        },
        {
          id: 'procesados',
          display: 'tag',
          icon: 'fa-user-tag',
          link:'',
        },
      ]
    },
  ]
}
