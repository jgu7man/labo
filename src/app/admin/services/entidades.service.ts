import { Injectable } from "@angular/core";
import { HttpApi } from "../models/http.model";
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { ColaboradoresService } from './colaboradores.service';
import { UsuariosService } from './usuarios.service';
import { CategoriasService } from './categorias.service';
import { ServiciosService } from './servicios.service';
import { DATAService } from './DATA.service';
import { PedidosService } from './pedidos.service';
import { UnidadMedidaService } from './unidadMedida.service';
import { AdministradorService } from './administradores.service';

@Injectable({ providedIn: 'root' })
export class EntidadesService {
    
    entidades = []
    entidad
  public DATA = []
  public docs: any
  constructor(
    private _DATA: DATAService,
    private _http: HttpClient,

    private _colaboradores: ColaboradoresService,
    private _usuarios: UsuariosService,
    private _categorias: CategoriasService,
    private _servicios: ServiciosService,
    private _pedidos: PedidosService,
    private _unidadMedida: UnidadMedidaService,
    private _administradores: AdministradorService
    ) {
        this.entidades.push(
          _colaboradores.ColaboradoresEntity,
          _usuarios.UsuariosEntity,
          _categorias.CategoriasEntity,
          _servicios.ServiciosEntity,
          _pedidos.PedidosEntity,
          _unidadMedida.unidadMedidaEntity,
          _administradores.AdministradorEntity
        )
    }

  async getCurrentEntity(currentEntity) {
    this.entidad = await this.entidades.find(entidad => entidad.tag === currentEntity)
      return this.entidad
  }

  async getOneDoc(tabla, identifier) {
    var docs = await this._DATA.httpGetData(tabla)
    var doc = await this.arrayDOC(docs[identifier])
    return doc
  }

  DATOS
  async getVisibleDATA(tabla) {
    var docs
    const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
    this.getData(tabla).subscribe(async data => {
      console.log(data)
      var dataFiltrada = await this.getVisibleFields(tabla, data)
      var docs = await this.arrayDATA(dataFiltrada)
      this.DATOS = docs
    })
    // var data = await this._DATA.httpGetData(tabla)
    await waitFor(2000)
    
    return this.DATOS
  }

  async getVisibleFields(currentEntity, data) {
    this.entidad = await this.entidades.find(entidad => entidad.tag === currentEntity)
    var visibleFields = []
    data.forEach(doc => {
      var newDoc = {}
      this.entidad.inputs.forEach(input => {
        if (input.visible) {
          Object.defineProperty(newDoc, input.name, {
            value: doc[input.name],
            writable: true,
            configurable: true,
            enumerable: true
          })
        } 
      })
      visibleFields.push(newDoc)
    })
    return visibleFields
  }

  async arrayDATA(docs) {
    this.DATA = []
    docs.forEach( doc => {
      var objectData = []
      Object.keys(doc).forEach( key => {
        objectData.push({key: key, value: doc[key]})
      })
      this.DATA.push(objectData)
    })
    
    return this.DATA
  }
  
  async arrayDOC(doc) {
    var objectData = []
    await Object.keys(doc).forEach(key => {
        objectData.push({key: key, value: doc[key]})
      })
    return objectData
  }

  saveData(currentTabla: string, data: any): Observable<any> {
    var body = JSON.stringify(data)
    var headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this._http.post(HttpApi+`${currentTabla}/agregar`, body, {headers: headers})
  }

  getData(currentTabla: string): Observable<any> {
    var headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this._http.get(HttpApi+`${currentTabla}/mostrar`, {headers: headers})
  }

  
}