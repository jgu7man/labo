import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
