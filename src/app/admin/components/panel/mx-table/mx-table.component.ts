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
  constructor(
    private _ruta: ActivatedRoute,
    private _entidades: EntidadesService,
  ) {}

  async ngOnInit() {
    
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

  getDATA(tabla) {
    this._entidades.getVisibleDATA(tabla).then(res => {
      this.DATA = res
    })
  }

  

}
