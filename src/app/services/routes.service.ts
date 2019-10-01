import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() { }

  async getPaginas() {
    return this.paginas
  }

  paginas: any[] = [
    { name: 'Servicios', tag: 'servicios', img: 'url("../../../../assets/img/servicios_header.png")' },
    { name: 'Contáctanos', tag: 'contactanos', img: 'url("../../../../assets/img/contactanos_header.png")' }
  ]
}
