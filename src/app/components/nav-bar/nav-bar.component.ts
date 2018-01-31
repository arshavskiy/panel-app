import {Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})

export class NavBarComponent implements OnInit {

  @HostListener('window:resize') navHide() {
    if (document.documentElement.clientWidth < 1200 ) {
      document.body.classList.add('active');
    }
  }

  constructor() {
  }

  ngOnInit() {
    this.navHide();
  }

  toggle() {
    console.log(event);
    if (document.body.classList.length > 0 ) {
      document.body.classList.remove('active');

    } else {
      document.body.classList.add('active');
    }
  }
}
