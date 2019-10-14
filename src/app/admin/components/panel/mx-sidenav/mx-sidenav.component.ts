import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../../services/sidenav.service';

@Component({
  selector: 'mx-sidenav',
  templateUrl: './mx-sidenav.component.html',
  styleUrls: ['./mx-sidenav.component.css']
})
export class MxSidenavComponent implements OnInit {

  public menu: any
  constructor(
    private _sidenav: SidenavService
  ) {
    this.menu = _sidenav.menu
   }

  ngOnInit() {
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });

    setTimeout(function (){
      $('.button-collapse').sidenav();
    },1000)
    $('.collapsible').collapsible();
  //   $('.button-collapse').sideNav({
  //     menuWidth: 300, // Default is 300
  //     edge: 'right', // Choose the horizontal origin
  //     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  //     draggable: true, // Choose whether you can drag to open on touch screens,
  //     onOpen: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
  //     onClose: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
  //   }
  // );
  }

}
