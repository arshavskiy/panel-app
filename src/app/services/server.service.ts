import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient ) { }

  getTasks(){
    // return this.tasks;
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }
}
