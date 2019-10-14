import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }

  async getCategorias() {
    return this.DATA
  }

  DATA = [
    {
        codigo: "1",
        name: "Lavado",
        descripcion: "Todo lo que va a la lavadora",
        comentario: "",
        crearProducto: false
    },
    {
        codigo: "2",
        name: "Planchado",
        descripcion: "Todo lo que se pasa por la plancha",
        comentario: "",
        crearProducto: false
    }
  ]


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
