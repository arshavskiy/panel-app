import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../services/server.service';


@Component({
  selector: '[app-tasks]',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  date: any;
  title = 'rrrr';

  constructor(private serverService: ServerService) { }

  ngOnInit() {

    this.serverService
      .getTasks()
      .subscribe( (res)=>{
        console.log(res);
      } );


    this.date = this.dateBuilder(2012, 1, 0);
  }


  dateBuilder(y:number,d:number,m:number){
    var newDate = new Date(y, d, m);
    return newDate;
  }





}
