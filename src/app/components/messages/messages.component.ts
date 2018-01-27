import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../services/server.service';

@Component({
  selector: '[app-messages]',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  users: any;

  constructor(private serverService: ServerService) { }

  ngOnInit() {

    this.serverService
      .getUsers().subscribe((res)=>{
      const data = res;
      this.users = data;
    });


  }

}
