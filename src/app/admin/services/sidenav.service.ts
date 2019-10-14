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
      link: 'dashboard',
      submenu: []
    },
    {
      id: 'clientes',
      display: 'clientes',
      icon: 'fa-users',
      link:'lista',
      submenu: [
        {
          id: 'colaboradores',
          display: 'colaboradores',
          icon: 'fa-users-cog',
          link:'colaboradores',
        },
        {
          id: 'usuarios',
          display: 'usuarios',
          icon: 'fa-user',
          link:'usuarios',
        },
      ]
    },
    {
      id: 'prod_cat',
      display: 'productos y categorías',
      icon: 'fa-box-open',
      link:'lista',
      submenu: [
        {
          id: 'productos',
          display: 'productos',
          icon: 'fa-box',
          link:'productos',
        },{
          id: 'categorias',
          display: 'categorías',
          icon: 'fa-boxes',
          link:'categorias',
        },
      ]
    },
    {
      id: 'pedidos',
      display: 'pedidos',
      icon: 'fa-tags',
      link:'lista',
      submenu: [
        {
          id: 'procesados',
          display: 'procesados',
          icon: 'fa-tags',
          link:'procesados',
        },
        {
          id: 'pendientes',
          display: 'pendientes',
          icon: 'fa-user-tag',
          link:'pendientes',
        },
      ]
    },
  ]
}
