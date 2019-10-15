import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntidadesService } from '../../../services/entidades.service';

@Component({
  selector: 'mx-info',
  templateUrl: './mx-info.component.html',
  styleUrls: ['./mx-info.component.css']
})
export class MxInfoComponent implements OnInit {

  public id
  public currentTabla
  public tabla
  public doc
  constructor(
    private ruta: ActivatedRoute,
    private _data: EntidadesService
  ) {
    ruta.params.subscribe(params => {
      this.id = params['id']
      this.currentTabla = params['tabla']
    })
   }

  async ngOnInit() {
    this.tabla = await this._data.getCurrentEntity(this.currentTabla)
    this.doc = await this._data.getOneDoc(this.currentTabla, this.id)
    this.doc.forEach(row => {
      var keyInfo = this.tabla.inputs.find(input => input.name === row.key)
      return row.key = keyInfo.display
    })
  }

}
