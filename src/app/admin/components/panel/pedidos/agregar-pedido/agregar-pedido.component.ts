import { Component, OnInit } from '@angular/core';
import { PedidosModel } from '../../../../models/pedidos.model';
import { DetalleOrdenModel } from '../../../../models/DetalleOrden.Model';
import { Location } from '@angular/common';
import { PedidosService } from '../../../../services/pedidos.service';
import { EntidadesService } from '../../../../services/entidades.service';

@Component({
  selector: 'agregar-pedido',
  templateUrl: './agregar-pedido.component.html',
  styleUrls: ['./agregar-pedido.component.css']
})
export class AgregarPedidoComponent implements OnInit {

  public pedido: PedidosModel
  public detalle: DetalleOrdenModel
  public categorias: []
  public categoria: string
  public servicios: []
  public servicio: string
  public unidadesMedida: []
  constructor(
    private _pedidos: PedidosService,
    private _location: Location,
    private _entidades: EntidadesService
  ) {
    this.pedido = new PedidosModel(1, '', '', '', '', '', '', '', 0, 0, 0, [], '')
    this.detalle = new DetalleOrdenModel(0, 0, 0, 0, 0)
    this._entidades.getData('categorias').subscribe(res => {
      this.categorias = res
    })
  }
  
  async ngOnInit() {
    const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
    await waitFor(5000)
    this._entidades.getData('unidadmedida').subscribe(res => {
      this.unidadesMedida = res
      console.log(res)
    })
  }

  getServiciosByCategorias() {
    this._pedidos.getServiciosByCategoria(this.detalle.IdCategoria)
    .subscribe(res => {
      this.servicios = res
    })
    
  }
  
  addDetalle() {
    console.log('agregando detalle')
    console.log(this.detalle)
    // this.categoria = this.categorias.find(catego => catego.IdCategoria === this.detalle.IdCategoria)
    
    this.pedido.Detalle_Orden.push({
      IdCategoria: +this.detalle.IdCategoria,
      IdServicio: +this.detalle.IdServicio,
      Cantidad: this.detalle.Cantidad,
      UnidadMedida: +this.detalle.UnidadMedida,
      Precio: this.detalle.Precio
    })
    this.detalle = new DetalleOrdenModel(0, 0, 0, 0, 0)
  }

  onDeleteDetalle(i) {
    this.pedido.Detalle_Orden.splice(i)
  }

  savePedido() {
    console.log(this.pedido)
    this._pedidos.generarPedido('pedidos', this.pedido).subscribe(
      response => {
        console.log(response)
        this._location.back()
      },error =>{ console.log(<any>error)}
    )
  }

}
