import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class DATAService {
    public DATA: any

    async httpGetData(tabla) {
        
        switch (tabla) {
            case 'colaboradores':
                this.DATA = this.colaboradores                
                break;
            case 'productos':
                this.DATA = this.productos                
                break;
            case 'categorias':
                this.DATA = this.categorias                
                break;
            case 'usuarios':
                this.DATA = this.usuarios                
                break;
            default:
                break;
        }
        return this.DATA
    }

    colaboradores = [
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

    usuarios = [
    {
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
    
    categorias = [
    {
        codigo: "1",
        name: "Lavado",
        descripcion: "Todo lo que va a la lavadora",
        comentario: "",
        crearProducto: false
    },
    {
        codigo: "2",
        name: "Planchado",
        descripcion: "Todo lo que se pasa por la plancha",
        comentario: "",
        crearProducto: false
    }
    ]
    
    productos = [{
        codigo: "1",
        name: "Lavado de ropa",
        descripcion: "Lavado de ropa",
        unidad: "kg",
        precio: 10,
        categoria: "lavado",
        activar: true,
        imagen: ""
    },
    {
        codigo: "2",
        name: "Lavado de edredón",
        descripcion: "Lavado de edredón",
        unidad: "pz",
        precio: 35,
        categoria: "lavado",
        activar: true,
        imagen: ""
    }
]
}