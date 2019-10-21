import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  
  public unidadMedida = ['kg','pz']
  constructor() { }


  public CategoriasEntity = {
    tag: 'categorias',
    tableName: 'categorias',
    singleName: 'categoria',
        inputs: [
          {
            name: 'descripcion',
            display: 'Descripción',
            inputType: 'text',
            value:'',
            visible: true
          },
          {
            name: 'status',
            display: 'Status',
            inputType: 'number',
            value:0,
            visible: false
          },
          
        ]
    }
  
}
