export class AdminModel{
    constructor(
        public username: string,
        public password: string,
        public email: string,
        public firstName: string,
        public lastName: string
    ) { }
    
    AdminTable = {
        tag: 'admins',
        inputs: [
            {
                name: 'username',
                display: 'Usuario',
                inputType: 'text',
            },
            {
                name: 'password',
                display: 'Constraseña',
                inputType: 'password',
            },
            {
                name: 'email',
                display: 'Email',
                inputType: 'email',
            },
            {
                name: 'firstName',
                display: 'Nombre/s',
                inputType: 'text',
            },
            {
                name: 'lastName',
                display: 'Apellido/s',
                inputType: 'text',
            },
        ]
    }
}