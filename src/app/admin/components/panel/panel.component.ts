import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    var u = JSON.parse(sessionStorage.getItem('labolog'))
    if (!u) {
      this.router.navigate(['/admin/login'])
      console.log("el Admin no ha iniciado sesión")
    }
  }

}
