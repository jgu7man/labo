import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contenido-contactanos',
  templateUrl: './contenido-contactanos.component.html',
  styleUrls: ['./contenido-contactanos.component.css']
})
export class ContenidoContactanosComponent implements OnInit {

  public formToDisplay = 'whatsapp'
  constructor() { }

  ngOnInit() {
  }

  changeForm(form) {
    this.formToDisplay = form
    $(".form").hide()
    if (this.formToDisplay === 'correo') {
      $("contact-form").fadeToggle()  
    } else {
      $("whatsapp-form").fadeToggle()
    }
  }

}
