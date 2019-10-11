import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminsService } from '../../../services/admins.service';

@Component({
  selector: 'mx-table',
  templateUrl: './mx-table.component.html',
  styleUrls: ['./mx-table.component.css']
})
export class MxTableComponent implements OnInit {

  public tablas = []
  public currentTabla: string
  public tabla
  public DATA = []
  constructor(
    private _ruta: ActivatedRoute,
    private _admins: AdminsService
  ) {
    this.tablas.push(_admins.AdminEntity)
   }

  ngOnInit() {
    this._ruta.data.subscribe(data => {
      this.currentTabla = data.tag
    })
    this.tabla = this.tablas.find(tabla => tabla.tag === this.currentTabla)
    this.getDATA(this.currentTabla)
  }

  getDATA(tabla) {
    switch (tabla) {
      case 'admins':
        this._admins.Admins.forEach(doc => {
          this.arrayDATA(doc)
        })
        break;
    
      default:
        break;
    }
  }

  arrayDATA(doc) {
    var objectData = []
    Object.keys(doc).forEach(key => {
      objectData.push({key: key, value: doc[key]})
    })
    this.DATA.push(objectData)
  }

}
