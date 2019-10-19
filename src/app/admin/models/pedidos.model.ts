export class PedidosModel{
    constructor(
        public idCliente: number,
        public Nombre: string,
        public Apellido: string,
        public Email: string,
        public Telefono: string,
        public Direccion: string,
        public FechaRecoleccion: string,
        public IdHorarioRecoleccion: string,
        public Latitud_Cliente: number,
        public Longitud_Cliente: number,
        public Ref_Pago_Tarjeta: number,
        public Detalle_Orden: object[],
    ) { }
    
    detalle = {
        IdCategoria: 0,
        IdServicio: 0,
        Cantidad: 0,
        UnidadMedida: 0,
        Precio: 0,
    }
}
    
