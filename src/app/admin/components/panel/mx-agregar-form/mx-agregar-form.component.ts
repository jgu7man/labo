import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TablaModel } from 'src/app/admin/models/tabla.model';
import { EntidadesService } from '../../../services/entidades.service';

@Component({
  selector: 'mx-agregar-form',
  templateUrl: './mx-agregar-form.component.html',
  styleUrls: ['./mx-agregar-form.component.css']
})
export class MxAgregarFormComponent implements OnInit {

  public tablas: any[] = []
  public currentTabla: string
  public tabla: TablaModel
  public model = {}
  public tableName: string

  constructor(
    private _ruta: ActivatedRoute,
    private _loaction: Location,
    private _entidades: EntidadesService,
  ) {}

  async ngOnInit() {
    this._ruta.params.subscribe(data => {
      this.currentTabla = data['entity']
    })
    this.tabla = await this._entidades.getCurrentEntity(this.currentTabla)
    console.log(this.tabla)
    this.tableName = this.tabla.singleName
  }

  getSelectValue(event) {
    console.log(event)
  }

  onSubmit() {
    this.tabla.inputs.forEach(input => {
      Object.defineProperty(this.model, input.name, 
        {value: input.value,enumerable: true,configurable: true,writable: true}
      )
    })
    this._entidades.saveData(this.currentTabla, this.model)
    
    this._loaction.back()
    
  }

}
