import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EntidadesService } from '../../../services/entidades.service';
import { TablaModel } from '../../../models/tabla.model';

@Component({
  selector: 'mx-edit-form',
  templateUrl: './mx-edit-form.component.html',
  styleUrls: ['./mx-edit-form.component.css']
})
export class MxEditFormComponent implements OnInit {

  public tablas: any[] = []
  public currentTabla: string
  public currentDoc: string
  public doc: any
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
      this.currentDoc = data['id']
    })
    this.tabla = await this._entidades.getCurrentEntity(this.currentTabla)
    this.doc = await this._entidades.getOneDoc(this.currentTabla, this.currentDoc)
    this.tableName = this.tabla.singleName
    this.tabla.inputs.forEach(input => {
      var field = this.doc.find(field => field.key === input.name)
      input.value = field.value
    })
  }

  getSelectValue(event) {
    console.log(event)
  }

  trackByFn(index, item) {
    return index;
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
