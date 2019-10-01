import { Component, OnInit } from '@angular/core';
import { WhatsappModel } from 'src/app/models/whatsapp.model';

@Component({
  selector: 'whatsapp-form',
  templateUrl: './whatsapp-form.component.html',
  styleUrls: ['./whatsapp-form.component.css']
})
export class WhatsappFormComponent implements OnInit {

  public mensaje: WhatsappModel
  public numero: number = 523121805955
  constructor() {
    this.mensaje = new WhatsappModel('','')
   }

  ngOnInit() {
  }

  onSubmit() {
    window.open(`https://api.whatsapp.com/send?phone=${this.numero}&text=Hola,%20soy%20${this.mensaje.nombre}.%20${this.mensaje.mensaje}`)
  }

}
