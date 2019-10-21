import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';
import * as crypto from "crypto-js";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: LoginModel
  public error
  constructor(
    private router: Router,
    private _auth: AuthService
  ) {
    this.user = new LoginModel(1,'','');
   }

  ngOnInit() {
    // var u = JSON.parse(localStorage.getItem('lasmotosSes'))
    // if (u != null || u != undefined) {
    //   this.router.navigate(['/admin'])
    //   console.log("el Admin ya inicio sesión")
    // }
  }

  cryptPwd(pwd) {
    try {
      return crypto.AES.encrypt(pwd, 'Contrasena').toString()
    } catch (error) {
      console.log(error)
    }
  }

  async onSubmit() {
    const pwd = await this.cryptPwd(this.user.Contrasena)
    this.user.Contrasena = pwd

    this._auth.AutenticarUsuario(this.user).subscribe(res => {
      if (res.error) {
        console.log(res)
        this.error = res.error.error
      }
    },(error)=>{
      console.log("error mostrar", error.error.error);
    })
  }

}
