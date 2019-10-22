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
        name: 'IdServicio',
        display: 'Id',
        inputType: 'number',
        value:0,
        visible: true
      },
      {
        name: 'Descripcion',
        display: 'Descripción',
        inputType: 'text',
        value:'',
        visible: true
      },
      {
        name: 'Descrip_Categoria',
        display: 'Categorias',
        inputType: 'select',
        value: this.categorias,
        visible: true
      },
      {
        name: 'UnidadMedida',
        display: 'Unidad de medida',
        inputType: 'select',
        value: this.unidadMedida,
        visible: true
      },
      {
        name: 'Precio',
        display: 'Precio Unitario',
        inputType: 'number',
        value:0,
        visible: true
      },
      {
        name: 'Imagen_url',
        display: 'Image Producto',
        inputType: 'file',
        value: '',
        visible: 'imagen',
        imgField: true
      },
    ]
  }
  
}
