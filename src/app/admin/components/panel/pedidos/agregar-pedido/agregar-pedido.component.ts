import { Component, OnInit } from '@angular/core';
import { PedidosModel } from '../../../../models/pedidos.model';
import { DetalleOrdenModel } from '../../../../models/DetalleOrden.Model';
import { Location } from '@angular/common';
import { PedidosService } from '../../../../services/pedidos.service';

@Component({
  selector: 'agregar-pedido',
  templateUrl: './agregar-pedido.component.html',
  styleUrls: ['./agregar-pedido.component.css']
})
export class AgregarPedidoComponent implements OnInit {

  public pedido: PedidosModel
  public detalle: DetalleOrdenModel
  constructor(
    private _pedidos: PedidosService,
    private _location: Location
  ) {
    this.pedido = new PedidosModel(1, '', '', '', '', '', '', '', 0, 0, 0, [])
    this.detalle = new DetalleOrdenModel(0,0,0,0,0)
   }

  ngOnInit() {
  }

  addDetalle() {
    console.log('agregando detalle')
    console.log(this.detalle)
    
    this.pedido.Detalle_Orden.push({
      IdCategoria: this.detalle.IdCategoria,
      IdServicio: this.detalle.IdServicio,
      Cantidad: this.detalle.Cantidad,
      UnidadMedida: this.detalle.UnidadMedida,
      Precio: this.detalle.Precio
    })
    this.detalle = new DetalleOrdenModel(0, 0, 0, 0, 0)
  }

  savePedido() {
    this._pedidos.generarPedido('pedidos', this.pedido).subscribe(
      response => {
        console.log(response)
        this._location.back()
      },error =>{ console.log(<any>error)}
    )
  }

}
