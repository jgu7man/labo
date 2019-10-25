import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor() { }
  public roles = [1, 2]


  public AdministradorEntity = {
    tag: 'administradores',
    tableName: 'administradores',
    singleName: 'administrador',
    inputs: [
          {
            name: 'UsuarioID',
            display: '',
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
            display: '',
            inputType: 'hidden',
            value: 3,
            visible: false
          },
        ]
    }
  
}
