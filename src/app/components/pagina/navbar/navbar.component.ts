import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public logo
  public close: boolean = false
  constructor() { }

  ngOnInit() {
    if (window.screen.width >= 450) {
      this.logo = '../../../../assets/img/LaboLogo.png'
    } else {
      this.logo = '../../../../assets/img/LogoHorizontal.png'
    }


    $(window).scroll(() => {
      if ($(window).scrollTop()) {
        $("#logoContainer").addClass('scrolled')
        $(".navbar").addClass('filled')
        $("ul#nav-mobile li a").addClass('secondary-text')
      } else {
        $("#logoContainer").removeClass('scrolled')
        $(".navbar").removeClass('filled')
        $("ul#nav-mobile li a").removeClass('secondary-text')
      }
    })
  }

  onMenu() {
    $("#nav-mobile").toggleClass('opened')
    $(".openMenu").toggleClass('close')
    this.close = !this.close
  }
}
