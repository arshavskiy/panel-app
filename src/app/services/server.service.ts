import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServerService {

  apiRoot: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient ) { }

  getTasks() {
    let url = `${this.apiRoot}/todos`;
    return this.http.get(url);
  }
  getMsg(){
    let url = `${this.apiRoot}/users`;
    return this.http.get(url);

  }
}
