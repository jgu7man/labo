import { Injectable, OnInit } from '@angular/core';
import * as DATA from '../jsons/productos.json'
import { CategoriasService } from './categorias.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public categorias = []
  public unidadMedida = [
    'kg (Kilogramos)',
    'pz (Pieza)'
  ]
  constructor(
    private _categorias: CategoriasService
  ) {
    this._categorias.getCategorias().then(res => {
      console.log(res)
      res.forEach(cat => {
        this.categorias.push(cat.name)
      })
      console.log(this.categorias)
    })
   }
  

  async getProductos() {
    return DATA.default
  }


  public ProductosEntity = {
    tag: 'productos',
    tableName: 'productos',
    singleName: 'producto',
        inputs: [
          {
            name: 'codigo',
            display: 'Código',
            inputType: 'text',
            value:''
          },
          {
            name: 'name',
            display: 'Nombre',
            inputType: 'text',
            value:''
          },
          {
            name: 'descripcion',
            display: 'Descripción',
            inputType: 'text',
            value:''
          },
          {
            name: 'unidad',
            display: 'Unidad de medida',
            inputType: 'select',
            value: this.unidadMedida
          },
          {
            name: 'precio',
            display: 'Precio Unitario',
            inputType: 'number',
            value:0
          },
          {
            name: 'categoria',
            display: 'Precio Unitario',
            inputType: 'select',
            value: this.categorias
          },
          {
            name: 'activar',
            display: 'Activar / Desactivar',
            inputType: 'checkbox',
            value: false
          },
          {
            name: 'imagen',
            display: 'Image Producto',
            inputType: 'file',
            value: ''
          },
        ]
    }
  
}
