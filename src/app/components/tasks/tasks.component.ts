import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-tasks]',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  date: any;
  title = "rrrr";

  constructor() { }

  ngOnInit() {

    this.date = this.dateBuilder(2012,1,0);
    console.log(this.date);

  }


  dateBuilder(y:number,d:number,m:number){
    var newDate = new Date(y, d, m);
    return newDate;
  }





}
