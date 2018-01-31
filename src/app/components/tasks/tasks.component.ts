import {Component, OnInit} from '@angular/core';
import {ServerService} from '../../services/server.service';

@Component({
  selector: '[app-tasks]',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  date: any;
  title = 'Tasks';
  tasks: any;
  lenToDo = 0;

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {

    this.serverService
      .getTasks().subscribe((res) => {
      const data = res;
      this.tasks = data;
      console.log(this.tasks);
      // this.tasks.len = this.tasks.length;
    });

    this.taskCompleted();

    this.date = this.dateBuilder(2012, 1, 0);
  }

  taskCompleted() {

    if (this.tasks) {
      for (let i in this.tasks) {
        if (this.tasks[i].completed) {
          this.lenToDo++;
        }
      }
        console.log(this.lenToDo);
      debugger;
    }
  }

  dateBuilder(y: number, d: number, m: number) {
    var newDate = new Date(y, d, m);
    return newDate;
  }




}
