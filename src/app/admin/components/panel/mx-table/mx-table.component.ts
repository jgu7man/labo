import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntidadesService } from 'src/app/admin/services/entidades.service';

@Component({
  selector: 'mx-table',
  templateUrl: './mx-table.component.html',
  styleUrls: ['./mx-table.component.css']
})
export class MxTableComponent implements OnInit, OnChanges {

  public tablas = []
  @Input() currentTabla: string
  public tabla
  public DATA = []
  public inputs = []
  public selected
  constructor(
    private _ruta: ActivatedRoute,
    private _entidades: EntidadesService,
  ) {}

  async ngOnInit() {
    this._ruta.data.subscribe(async data => {
      if (Object.keys(data).length != 0) {
        this.currentTabla = data.tag
        this.inputs = []

        var entidad = await this._entidades.getCurrentEntity(this.currentTabla)
        this.tabla = entidad
        entidad.inputs.forEach(input => {
          if (input.visible) {
            this.inputs.push(input)
          }
        })
        this.getDATA(this.currentTabla)
      } else {
        console.log(' no hay')
      }
    })
  }

  async ngOnChanges(changes: SimpleChanges) {
    this.inputs = []

    var entidad = await this._entidades.getCurrentEntity(this.currentTabla)
    this.tabla = entidad
    entidad.inputs.forEach(input => {
      if (input.visible) {
        this.inputs.push(input)
      }
    })
    this.getDATA(this.currentTabla)
  }

  toDelete(id) {
    this.selected = id
    $('mx-delete-popup').fadeToggle()
  }

  getDATA(tabla) {
    this._entidades.getVisibleDATA(tabla).then(res => {
      this.DATA = res
    })
  }

  

}
