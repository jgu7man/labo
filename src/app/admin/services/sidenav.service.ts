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
      id: 'serv_cat',
      display: 'servicios y categorías',
      icon: 'fa-box-open',
      link:'lista',
      submenu: [
        {
          id: 'servicios',
          display: 'servicios',
          icon: 'fa-box',
          link:'servicios',
        },{
          id: 'categorias',
          display: 'categorías',
          icon: 'fa-boxes',
          link:'categorias',
        }
      ]
    },
    {
      id: 'pedidos',
      display: 'pedidos',
      icon: 'fa-tags',
      link:'pedidos',
      submenu: [
        {
          id: 'procesados',
          display: 'procesados',
          icon: 'fa-tags',
          link:'',
        },
        {
          id: 'pendientes',
          display: 'pendientes',
          icon: 'fa-user-tag',
          link:'',
        },
      ]
    },
    {
      id: 'configuración',
      display: 'configuración',
      icon: 'fa-cog',
      link:'lista',
      submenu: [
        {
          id: 'administradores',
          display: 'administradores',
          icon: 'fa-user-tie',
          link:'administradores',
        },
        {
          id: 'unidadmedida',
          display: 'Unidad de medida',
          icon: 'fa-balance-scale',
          link:'unidadmedida',
        },
      ]
    },
  ]
}
