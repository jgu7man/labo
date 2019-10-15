import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mx-delete-popup',
  templateUrl: './mx-delete-popup.component.html',
  styleUrls: ['./mx-delete-popup.component.css']
})
export class MxDeletePopupComponent implements OnInit {

  @Input() tabla: any
  @Input() elemento: any
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCancelar() {
    $('mx-delete-popup').fadeToggle()
  }

  onAceptar() {
    console.log(this.elemento, 'borrado de: ', this.tabla.tableName)
    $('mx-delete-popup').fadeToggle()
    var url = window.location.pathname
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([url])); 
  }

}
