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
