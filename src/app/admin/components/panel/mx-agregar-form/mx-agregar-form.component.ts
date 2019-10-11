import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AdminsService } from '../../../services/admins.service';

@Component({
  selector: 'mx-agregar-form',
  templateUrl: './mx-agregar-form.component.html',
  styleUrls: ['./mx-agregar-form.component.css']
})
export class MxAgregarFormComponent implements OnInit {

  public tablas: any[] = []
  public currentTabla: string
  public tabla: any
  public model = {}
  public tableName: string
  constructor(
    private _ruta: ActivatedRoute,
    private _loaction: Location,

    private _admins: AdminsService,
  ) {
    this.tablas.push(_admins.AdminEntity)
   }

  ngOnInit() {
    this._ruta.params.subscribe(data => {
      this.currentTabla = data['entity']
    })
    this.tabla = this.tablas.find(tabla => tabla.tag === this.currentTabla)
    this.tableName = this.tabla.singleName
  }

  onSubmit() {
    this.tabla.inputs.forEach(input => {
      Object.defineProperty(this.model, input.name, 
        {value: input.value,enumerable: true,configurable: true,writable: true}
      )
    })
    this._loaction.back()
    
  }

}
