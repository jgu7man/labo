import { Injectable } from '@angular/core';
import * as DATA from '../jsons/categorias.json'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }

  async getCategorias() {
    return DATA.default
  }


  public CategoriasEntity = {
    tag: 'categorias',
    tableName: 'categorias',
    singleName: 'categoria',
        inputs: [
          {
            name: 'codigo',
            display: 'Código',
            inputType: 'number',
            value: 0
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
            name: 'comentario',
            display: 'Comentario',
            inputType: 'text',
            value:''
          },
          {
            name: 'crearProducto',
            display: 'Crear Producto de Categoría',
            inputType: 'checkbox',
            value: false
          },
        ]
    }
  
}
