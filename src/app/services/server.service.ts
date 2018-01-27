import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient ) { }


  getTasks(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
