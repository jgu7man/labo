import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }
  public roles = [1, 2]


  public UsuariosEntity = {
    tag: 'usuarios',
    tableName: 'usuarios',
    singleName: 'usuario',
    inputs: [
          {
            name: 'UsuarioID',
            display: 'UsuarioID',
            inputType: 'hidden',
            value:1,
            visible: false
          },
          {
            name: 'Usuario',
            display: 'Usuario',
            inputType: 'text',
            value:'',
            visible: false
      },
          {
            name: 'Password',
            display: 'Constraseña',
            inputType: 'password',
            value:'',
            visible: false
          },
          {
            name: 'Email',
            display: 'Email',
            inputType: 'email',
            value:'',
            visible: false
          },
          {
            name: 'Nombre',
            display: 'Nombre/s',
            inputType: 'text',
            value:'',
            visible: true
          },
          {
            name: 'Apellido',
            display: 'Apellido/s',
            inputType: 'text',
            value:'',
            visible: true
          },
          {
            name: 'Direccion',
            display: 'Dirección',
            inputType: 'text',
            value:'',
            visible: false
      },
          {
            name: 'Telefono',
            display: 'Teléfono',
            inputType: 'text',
            value:'',
            visible: false
          },
          {
            name: 'Ciudad',
            display: 'Ciudad',
            inputType: 'text',
            value:'',
            visible: false
      },
          {
            name: 'Rol',
            display: 'Rol',
            inputType: 'select',
            value: this.roles,
            visible: false
          },
        ]
    }
  
}
