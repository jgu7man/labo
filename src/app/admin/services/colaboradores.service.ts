import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  constructor() { }

  // async getColaboradores() {
  //   return this.DATA
  // }

  

  public ColaboradoresEntity = {
    tag: 'colaboradores',
    tableName: 'colaboradores',
    singleName: 'colaborador',
        inputs: [
          {
            name: 'email',
            display: 'Email',
            inputType: 'email',
            value:'',
            visible: true
          },
          {
            name: 'firstName',
            display: 'Nombre/s',
            inputType: 'text',
            value:'',
            visible: false
          },
          {
            name: 'lastName',
            display: 'Apellido/s',
            inputType: 'text',
            value:'',
            visible: false
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
