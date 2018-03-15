import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../services/server.service';

@Component({
  selector: '[app-messages]',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  title = 'Messages';
  messages: any;
  twitterData: object;
  passQ: string;
  passT: number;


  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getMsg().subscribe((res) => {
      const data = res;
      this.messages = data;
    });
  }
  scrapTwitter(q, t) {
    console.log(q, t);
    this.serverService.getTwit(q,t).subscribe((res) => {
      const data = res;
      this.twitterData = data;
    });
  }
}
