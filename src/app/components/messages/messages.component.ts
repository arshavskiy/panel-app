import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {ServerService} from '../../services/server.service';

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

  title = 'Messages';
  messages: any;
  twitterData: object;
  passQ: string;
  passT: number;

  heroine: Heroine = {
		id: 1,
		name: 'Tom'
	};

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
  }
}
