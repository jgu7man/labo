import { Component, OnInit } from '@angular/core';
import { HeaderModel } from 'src/app/models/header.model';
import { RoutesService } from '../../../services/routes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  public header: HeaderModel
  public route: string
  constructor(
    private _routes: RoutesService,
    private _ruta: ActivatedRoute
  ) {
    this.header = new HeaderModel('','','')
   }

  ngOnInit() {
    this.route = this._ruta.snapshot.routeConfig.path
    this._routes.getPaginas().then(rutas => {
      this.header = rutas.find(ruta => {
        return this.route === ruta.tag
      })
    })
  }

}
