import { Component, OnInit } from '@angular/core';
import { AdminModel } from '../../models/admin.model';
import { AdminsService } from '../../services/admins.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public admin: AdminModel
  constructor(
    private _Admins: AdminsService,
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
    // this._Admins.login(this.admin.email, this.admin.contra)
  }

}
