export class UsuarioModel{
    constructor(
        public Usuario: string,
        public Password: string,
        public Nombre: string,
        public Apellido: string,
        public Email: string,
        public Telefono: string,
        public Calle: string,
        public NumeroExterior: string,
        public Localidad: string,
        public CodigoPostal: string,
        public Rol: number,
        public Status: number
    ){}
}