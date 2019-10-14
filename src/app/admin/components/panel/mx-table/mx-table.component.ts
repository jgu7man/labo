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
  constructor(
    private _ruta: ActivatedRoute,
    private _entidades: EntidadesService,
  ) {}

  async ngOnInit() {
    
  }

  async ngOnChanges(changes: SimpleChanges) {
    var entidades = await this._entidades.getCurrentEntity(this.currentTabla)
    this.tabla = entidades
    this.getDATA(this.currentTabla)
  }

  getDATA(tabla) {
    this._entidades.getDATA(tabla).then(res => {
      this.DATA = res
    })
  }

  

}
