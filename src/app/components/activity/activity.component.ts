import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../services/server.service';

@Component({
  selector: '[app-activity]',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  title: string = 'Activity';
  messages: any;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService
      .getMsg().subscribe((res)=>{
      const data = res;
      this.messages = data;
      console.log(this.messages);
    });
  }

}
