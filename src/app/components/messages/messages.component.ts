import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {ServerService} from '../../services/server.service';
import { NgStyle } from '@angular/common';

export class Heroine {
	id: number;
	name: string;
}
@Component({
  selector: '[app-messages]',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  title = 'Twitter search';
  messages: any;
  twitterData: object;
  passQ: string;
  passT: number;
  Tlength :number;

  levelString: string;
  levels:Array<Object> = [
    {val: "",       name: ""},
    {val: ' filter:media', name: "media"},
    {val: ":)",       name: ":)"},
    {val: "filter:images",       name: "images"}
];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getMsg().subscribe((res) => {
      const data = res;
      this.messages = data;
    });
  }

  scrapTwitter(q, t) {
    console.log(q, t);
    this.serverService.getTwit(q, t).subscribe((res) => {
      const data = res;
      this.twitterData = data;
    });

    // let x = document.getElementsByClassName("search_result");
    // let i = 0, l=0;
    // for (i = 0; l = x.length; i < l; i++) {
    //   x[i].innerHTML;
    // }
  }
}
