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
    console.log(this.tabla)
    this.tabla.inputs.forEach(input => {
      if (input.opcional || input.turnOpciones) {
        this.inputsOpcionales.push(input)
      } else {
        this.inputs.push(input)
      }
    })
    console.log(this.inputsOpcionales, this.inputs)
    this.tableName = this.tabla.singleName
  }

  selected(option) {
    return option
  }

  turnOpciones(inputClicked) {
    var input = this.inputsOpcionales.find(input => input.name === inputClicked)
    input.value = !input.value
    
    $(".opcionales").slideToggle()
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
    this._entidades.saveData(this.currentTabla, this.model).subscribe(
      response => {
        console.log(response)
        this._loaction.back()
      },
      error => {
        console.log(<any>error)
        alert(error.error)
      }
    )
    
    
    
  }

}
