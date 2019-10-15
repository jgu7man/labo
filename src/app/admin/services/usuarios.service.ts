import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }



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
