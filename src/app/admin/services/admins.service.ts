import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor() { }

  public Admins = [
    {
      username: 'jgu7man',
      password: '123456',
      email: 'jgu7man@gmail.com',
      firstName: 'Jorge',
      lastName: 'Guzman'
    },
    {
      username: 'meche33',
      password: '654321',
      email: 'meche33@gmail.com',
      firstName: 'Mercedes',
      lastName: 'Amezcua'
    }
  ]

  public AdminEntity = {
    tag: 'admins',
    tableName: 'adminstradores',
    singleName: 'administrador',
        inputs: [
            {
                name: 'username',
                display: 'Usuario',
                inputType: 'text',
                value:''
            },
            {
                name: 'password',
                display: 'Constraseña',
                inputType: 'password',
                value:''
            },
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
        ]
    }
  
}
