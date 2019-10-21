import { Injectable, OnInit } from '@angular/core';
import { CategoriasService } from './categorias.service';
import { DATAService } from './DATA.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  public categorias = []
  public unidadMedida = ['kg','pz']
  constructor(
    private _DATA: DATAService
  ) {
    this._DATA.httpGetData('categorias').then(res => {
      res.forEach(cat => {
        this.categorias.push(cat.name)
      })
    })
   }
  

  public ServiciosEntity = {
    tag: 'servicios',
    tableName: 'servicios',
    singleName: 'servicio',
        inputs: [
          {
            name: 'categoria',
            display: 'Categorias',
            inputType: 'select',
            value: this.categorias,
            visible: false
          },
          {
            name: 'descripcion',
            display: 'Descripción',
            inputType: 'text',
            value:'',
            visible: true
          },
          {
            name: 'unidadmedida',
            display: 'Unidad de medida',
            inputType: 'select',
            value: this.unidadMedida,
            visible: false
          },
          {
            name: 'precio',
            display: 'Precio Unitario',
            inputType: 'number',
            value:0,
            visible: false
          },
          
          {
            name: 'status',
            display: 'Activar / Desactivar',
            inputType: 'checkbox',
            value: false,
            visible: false
          },
          {
            name: 'imagen',
            display: 'Image Producto',
            inputType: 'file',
            value: '',
            visible: true
          },
        ]
    }
  
}
