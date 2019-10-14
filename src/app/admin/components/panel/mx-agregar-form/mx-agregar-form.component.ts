import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ColaboradoresService } from '../../../services/colaboradores.service';
import { UsuariosService } from '../../../services/usuarios.service';
import { TablaModel } from 'src/app/admin/models/tabla.model';
import { CategoriasService } from '../../../services/categorias.service';
import { ProductosService } from '../../../services/productos.service';
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
  public selects = []
  constructor(
    private _ruta: ActivatedRoute,
    private _loaction: Location,

    private _entidades: EntidadesService,
    private _colaboradores: ColaboradoresService,
    private _usuarios: UsuariosService,
    private _categorias: CategoriasService,
    private _productos: ProductosService
  ) {
    
   }

  async ngOnInit() {
    this._ruta.params.subscribe(data => {
      this.currentTabla = data['entity']
    })
    this.tabla = await this._entidades.getCurrentEntity(this.currentTabla)
    console.log(this.tabla)
    this.tableName = this.tabla.singleName
  }

  onSubmit() {
    this.inputs.forEach(input => {
      Object.defineProperty(this.model, input.name, 
        {value: input.value,enumerable: true,configurable: true,writable: true}
      )
    })
    
    this._loaction.back()
    
  }

}
