import { Injectable } from "@angular/core";

import { ColaboradoresService } from './colaboradores.service';
import { UsuariosService } from './usuarios.service';
import { CategoriasService } from './categorias.service';
import { ProductosService } from './productos.service';
import { DATAService } from './DATA.service';

@Injectable({ providedIn: 'root' })
export class EntidadesService {
    
    entidades = []
    entidad
  public DATA = []
  public docs: any
  constructor(
      private _DATA: DATAService,
        private _colaboradores: ColaboradoresService,
        private _usuarios: UsuariosService,
        private _categorias: CategoriasService,
        private _productos: ProductosService,
    ) {
        this.entidades.push(
            _colaboradores.ColaboradoresEntity,
            _usuarios.UsuariosEntity,
            _categorias.CategoriasEntity,
            _productos.ProductosEntity
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

  async getVisibleDATA(tabla) {
    var data = await this._DATA.httpGetData(tabla)
    var dataFiltrada = await this.getVisibleFields(tabla, data)
    var docs = await this.arrayDATA(dataFiltrada)

    return docs
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

  saveData(currentTabla, data) {
    console.log(data, 'guardada en: ', currentTabla)
  }
}