import { Injectable, OnInit } from '@angular/core';
import { DATAService } from './DATA.service';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {

  constructor(
    private _DATA: DATAService
  ) {
    
   }
  

  public unidadMedidaEntity = {
    tag: 'unidadmedida',
    tableName: 'Unidades de Medida',
    singleName: 'Unidad de medida',
        inputs: [
          {
            name: 'descripcion',
            display: 'Descripción',
            inputType: 'text',
            value:'',
            visible: true
          },
          {
            name: 'codigo',
            display: 'Código',
            inputType: 'text',
            value: '',
            visible: false
          },
        ]
    }
  
}
