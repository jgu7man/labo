import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntidadesService } from '../../../services/entidades.service';

@Component({
  selector: 'mx-lista',
  templateUrl: './mx-lista.component.html',
  styleUrls: ['./mx-lista.component.css']
})
export class MxListaComponent implements OnInit {

  constructor(
    private _ruta: ActivatedRoute,
  ) { }

  public listaName
  public entidad

  ngOnInit() {
    this._ruta.params.subscribe( params => {
      this.listaName = params['tabla']
    })
  }

}
