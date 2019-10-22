import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  constructor() { }
  public roles = [1, 2]
  // async getColaboradores() {
  //   return this.DATA
  // }

  

  public ColaboradoresEntity = {
    tag: 'colaboradores',
    tableName: 'colaboradores',
    singleName: 'colaborador',
    inputs: [
      {
        name: 'id_cliente',
        display: 'id_cliente',
        inputType: 'hidden',
        value:1,
        visible: true    
      },
      {
        name: 'Usuario',
        display: 'Usuario',
        inputType: 'text',
        value:'',
        visible: true
      },
      {
        name: 'Password',
        display: 'Constraseña',
        inputType: 'password',
        value:'',
        visible: false
      },
      {
        name: 'Nombre',
        display: 'Nombre/s',
        inputType: 'text',
        value:'',
        visible: false
      },
      {
        name: 'Apellido',
        display: 'Apellido/s',
        inputType: 'text',
        value:'',
        visible: false
      },
      {
        name: 'Email',
        display: 'Email',
        inputType: 'email',
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
        name: 'Latitud',
        display: 'Latitud',
        inputType: 'number',
        value:0,
        visible: false
      },
      {
        name: 'Longitud',
        display: 'Longitud',
        inputType: 'number',
        value:0,
        visible: false
      },
      {
        name: 'Rol',
        display: 'Rol',
        inputType: 'select',
        value:this.roles,
        visible: false
      },
    ]
  }
  
}
