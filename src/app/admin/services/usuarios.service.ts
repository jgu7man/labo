import { Injectable } from '@angular/core';
import * as DATA from '../jsons/usuarios.json'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  async getUsuarios() {
    return DATA.default
  }


  public UsuariosEntity = {
    tag: 'usuarios',
    tableName: 'usuarios',
    singleName: 'usuario',
        inputs: [
          {
            name: 'email',
            display: 'Email',
            inputType: 'email',
            value:'',
            visible: false
          },
          {
            name: 'firstName',
            display: 'Nombre/s',
            inputType: 'text',
            value:'',
            visible: true
          },
          {
            name: 'lastName',
            display: 'Apellido/s',
            inputType: 'text',
            value:'',
            visible: true
          },
          {
            name: 'address',
            display: 'Dirección',
            inputType: 'text',
            value:'',
            visible: false
          },
          {
            name: 'password',
            display: 'Constraseña',
            inputType: 'password',
            value:'',
            visible: false
          },
        ]
    }
  
}
