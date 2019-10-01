import { Component, OnInit } from '@angular/core';
import { ContactactoModel } from 'src/app/models/contacto.model';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public contacto: ContactactoModel;
  public mensaje: string
  public enviado = false
  public correoToSend = 'jqu7man@gmail.com'
  constructor() {
    this.contacto = new ContactactoModel('','','','')
   }

  ngOnInit() {
  }

  onSubmit() {
    window.open(`mailto:${this.correoToSend}?subject=Mensaje de: ${this.contacto.nombre}&body=Mensaje: ${this.contacto.mensaje}%0d%0aTeléfono: ${this.contacto.telefono}%0d%0aCorreo: ${this.contacto.email}`)
  }

}
