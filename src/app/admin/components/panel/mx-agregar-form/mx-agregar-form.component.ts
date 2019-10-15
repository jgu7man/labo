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
  public inputs = []
  public turnInputs = []
  public inputsOpcionales = []
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
    this.tabla.inputs.forEach(input => {
      if (input.opcional || input.turnOpciones) {
        this.inputsOpcionales.push(input)
      } else {
        this.inputs.push(input)
      }
    })
    this.tableName = this.tabla.singleName
  }

  turnOpciones(inputClicked) {
    var input = this.inputsOpcionales.find(input => input.name === inputClicked)
    input.value = !input.value
    
    $(".opcionales").slideToggle()
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
