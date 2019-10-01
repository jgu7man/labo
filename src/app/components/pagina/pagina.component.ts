import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  constructor(
  ) {
    
   }

  ngOnInit() {
    var ruta = window.location.href.split('/')[3]
    if (ruta == '') {
      $(".contenido").addClass('contenidoHome')
    }
  }

}
