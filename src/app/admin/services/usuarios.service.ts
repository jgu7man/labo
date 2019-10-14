import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  async getUsuarios() {
    return this.DATA
  }

  DATA =  [{
         email: "jdaniel@gmail.com",
         firstName: "Jose Daniel",
         lastName: "Leon",
         address: "C. Independencia 34, Centro, Colima",
         password: "123456"
     },
     {
         email: "chistianc@gmail.com",
         firstName: "Cristian",
         lastName: "Campoverde",
         address: "C. Reforma 567, Centro, Colima",
         password: "654321"
     }
 ]


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
