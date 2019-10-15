import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  
  public unidadMedida = ['kg','pz']
  constructor() { }

  // async getCategorias() {
  //   return this.DATA
  // }

  


  public CategoriasEntity = {
    tag: 'categorias',
    tableName: 'categorias',
    singleName: 'categoria',
        inputs: [
          {
            name: 'codigo',
            display: 'Código',
            inputType: 'text',
            value: '',
            visible: false
          },
          {
            name: 'name',
            display: 'Nombre',
            inputType: 'text',
            value:'',
            visible: true
          },
          {
            name: 'descripcion',
            display: 'Descripción',
            inputType: 'text',
            value:'',
            visible: true
          },
          {
            name: 'comentario',
            display: 'Comentario',
            inputType: 'text',
            value:'',
            visible: false
          },
          {
            name: 'crearProducto',
            display: 'Crear Producto de Categoría',
            inputType: 'checkbox',
            value: false,
            visible: false,
            turnOpciones: true
          },
          {
            name: 'precio',
            display: 'Precio del producto',
            inputType: 'text',
            value: '',
            visible: false,
            opcional: true
          },
          {
            name: 'uniadad',
            display: 'Unidad de medida',
            inputType: 'select',
            value: this.unidadMedida,
            visible: false,
            opcional: true
          },
        ]
    }
  
}
