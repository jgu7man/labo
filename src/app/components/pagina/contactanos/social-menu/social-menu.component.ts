import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'social-menu',
  templateUrl: './social-menu.component.html',
  styleUrls: ['./social-menu.component.css']
})
export class SocialMenuComponent implements OnInit {

  @Output() sendForm = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  openForm(form) {
    this.sendForm.emit(form)
  }

}
