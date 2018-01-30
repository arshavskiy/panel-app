import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements  OnInit{

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    if (document.body.classList.length > 0) {
      document.body.classList.remove('active');

    } else {
      document.body.classList.add('active');
    }
  }
}
