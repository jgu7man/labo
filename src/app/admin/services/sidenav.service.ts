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
      submenu: []
    },
    {
      id: 'clientes',
      display: 'clientes',
      icon: 'fa-users',
      submenu: [
        {
          id: 'colaboradores',
          display: 'colaboradores',
          icon: 'fa-users-cog',
        },
        {
          id: 'usuarios',
          display: 'colaboradores',
          icon: 'fa-user',
        },
      ]
    },
    {
      id: 'prod_cat',
      display: 'productos y categorías',
      icon: 'fa-box-open',
      submenu: []
    },
    {
      id: 'pedidos',
      display: 'pedidos',
      icon: 'fa-tags',
      submenu: [
        {
          id: 'procesados',
          display: 'tag',
          icon: 'fa-tags',
        },
        {
          id: 'procesados',
          display: 'tag',
          icon: 'fa-user-tag',
        },
      ]
    },
  ]
}
