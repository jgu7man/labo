import { Injectable } from "@angular/core";

import { ColaboradoresService } from './colaboradores.service';
import { UsuariosService } from './usuarios.service';
import { CategoriasService } from './categorias.service';
import { ProductosService } from './productos.service';

@Injectable({ providedIn: 'root' })
export class EntidadesService {
    
    entidades = []
    entidad
    public DATA
    constructor(
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

    async getDATA(currentEntity) {
            switch (currentEntity) {
          case 'colaboradores':
            this.DATA = []
            var docs = await this._colaboradores.getColaboradores()
            var data = await this.arrayDATA(docs)
            break;
          case 'usuarios':
            this.DATA = []
            var docs = await this._usuarios.getUsuarios()
            var data = await this.arrayDATA(docs)
            break;
          case 'categorias':
            this.DATA = []
            var docs = await this._categorias.getCategorias()
            var data = await this.arrayDATA(docs)
            break;
          case 'productos':
            this.DATA = []
            var docs = await this._productos.getProductos()
            var data = await this.arrayDATA(docs)
            break;
        
          default:
            break;
        }
        return data
    }

    async arrayDATA(docs) {
        await docs.forEach(async doc => {
            var objectData = []
            await Object.keys(doc).forEach(async key => {
                return objectData.push({key: key, value: doc[key]})
            })
            return this.DATA.push(objectData)
        })
        return this.DATA
    }
}