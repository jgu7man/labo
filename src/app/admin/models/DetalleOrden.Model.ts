export class DetalleOrdenModel{
    constructor(
        public IdCategoria: number,
        public IdServicio: number,
        public Cantidad: number,
        public UnidadMedida: number,
        public Precio: number,
    ){}
}