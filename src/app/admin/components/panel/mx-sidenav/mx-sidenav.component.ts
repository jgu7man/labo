import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mx-sidenav',
  templateUrl: './mx-sidenav.component.html',
  styleUrls: ['./mx-sidenav.component.css']
})
export class MxSidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
  }

}
