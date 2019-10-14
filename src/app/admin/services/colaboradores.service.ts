import { Injectable } from '@angular/core';
import * as DATA from '../jsons/colaboradores.json'

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  constructor() { }

  async getColaboradores() {
    return DATA.default
  }

  public ColaboradoresEntity = {
    tag: 'colaboradores',
    tableName: 'colaboradores',
    singleName: 'colaborador',
        inputs: [
          {
            name: 'email',
            display: 'Email',
            inputType: 'email',
            value:''
          },
          {
            name: 'firstName',
            display: 'Nombre/s',
            inputType: 'text',
            value:''
          },
          {
            name: 'lastName',
            display: 'Apellido/s',
            inputType: 'text',
            value:''
          },
          {
            name: 'address',
            display: 'Dirección',
            inputType: 'text',
            value:''
          },
          {
              name: 'password',
              display: 'Constraseña',
              inputType: 'password',
              value:''
          },
        ]
    }
  
}
