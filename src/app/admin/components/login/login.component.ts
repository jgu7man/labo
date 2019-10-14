import { Component, OnInit } from '@angular/core';
import { AdminModel } from '../../models/admin.model';
import { ColaboradoresService } from '../../services/colaboradores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public admin: AdminModel
  constructor(
    private _colaboradores: ColaboradoresService,
    private router: Router
  ) {
    this.admin = new AdminModel('','','','','');
   }

  ngOnInit() {
    var u = JSON.parse(localStorage.getItem('lasmotosSes'))
    if (u != null || u != undefined) {
      this.router.navigate(['/admin'])
      console.log("el Admin ya inicio sesión")
    }
  }

  onSubmit(){
    // this._colaboradores.login(this.admin.email, this.admin.contra)
  }

}
