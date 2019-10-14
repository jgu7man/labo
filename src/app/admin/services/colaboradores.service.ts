import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  constructor() { }

  async getColaboradores() {
    return this.DATA
  }

  DATA = [
    {
         email: "jgu7man@gmail.com",
         firstName: "Jorge",
         lastName: "Guzman",
         address: "C. Independencia 34, Centro, Colima",
         password: "123456"
     },
     {
         email: "meche33@gmail.com",
         firstName: "Mercedes",
         lastName: "Amezcua",
         address: "C. Reforma 567, Centro, Colima",
         password: "654321"
     }
 ]

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
