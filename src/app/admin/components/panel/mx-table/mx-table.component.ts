import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mx-table',
  templateUrl: './mx-table.component.html',
  styleUrls: ['./mx-table.component.css']
})
export class MxTableComponent implements OnInit {

  constructor(
    private _ruta: ActivatedRoute
  ) { }

  ngOnInit() {
    this._ruta.data.subscribe( data => console.log(data))
  }

}
