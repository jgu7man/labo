import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpApi } from "../models/http.model";

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private _http: HttpClient) { }

  generarPedido(currentTabla: string, data: any): Observable<any> {
    var body = JSON.stringify(data)
    var headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this._http.post(HttpApi+`${currentTabla}/generar`, body, {headers: headers})
  }

  getAllPedidos(currentTabla: string): Observable<any> {
    var headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this._http.get(HttpApi+`${currentTabla}/mostrar`, {headers: headers})
  }


  public PedidosEntity = {
    tag: 'pedidos',
    tableName: 'pedidos',
    singleName: 'pedido',
    inputs: [
      {
        name: 'IdCliente',
        display: 'idCliente',
        inputType: 'hidden',
        value: 1,
        visible: false
      },
      {
        name: 'Nombre',
        display: 'Nombre',
        inputType: 'text',
        value: '',
        visible: true
      },
      {
        name: 'Apellido',
        display: 'Apellido',
        inputType: 'text',
        value: '',
        visible: true
      },
      {
        name: 'Email',
        display: 'Email',
        inputType: 'text',
        value: '',
        visible: true
      },
      {
        name: 'Telefono',
        display: 'Teléfono',
        inputType: 'text',
        value: '',
        visible: true
      },
      {
        name: 'Direccion',
        display: 'Dirección',
        inputType: 'text',
        value: '',
        visible: false
      },
      {
        name: 'FechaGeneracion',
        display: 'Fecha de Generación',
        inputType: 'text',
        value: '',
        visible: true
      },
      {
        name: 'FechaRecoleccion',
        display: 'Fecha de Recolección',
        inputType: 'text',
        value: '',
        visible: false
      },
      {
        name: 'IdHorarioRecoleccion',
        display: 'Id Horario de Recoleccion',
        inputType: 'number',
        value: 0,
        visible: false
      },
      {
        name: 'Latitud_Cliente',
        display: 'Latitud del Cliente',
        inputType: 'number',
        value: 0,
        visible: false
      },
      {
        name: 'Longitud_Cliente',
        display: 'Longitud del Cliente',
        inputType: 'number',
        value: 0,
        visible: false
      },
      {
        name: 'Ref_Pago_Tarjeta',
        display: 'Referencia de Pago de Tarjeta',
        inputType: 'number',
        value: 0,
        visible: false
      },
      {
        name: 'Detalle_Orden',
        display: 'Detalle de Orden',
        inputType: 'popup',
        value: [],
        visible: false,
        popup: false
      },
    ]
  }
  
}
