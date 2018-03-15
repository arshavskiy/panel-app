import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServerService {

  apiRoot: string = 'https://jsonplaceholder.typicode.com';
  apiTwitUrl: string = 'http://localhost:8080/api/twits/';
  twitResponse: any = '';

  constructor(private http: HttpClient ) { }

  getTasks() {
    const url = `${this.apiRoot}/todos`;
    return this.http.get(url);
  }
  getMsg() {
    const url = `${this.apiRoot}/users`;
    return this.http.get(url);

  }
  getTwit(q,t) {
    const url = `${this.apiTwitUrl}/${q},${t}`;
    return this.http.get(url);
  }

}
