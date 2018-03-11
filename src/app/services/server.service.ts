import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServerService {

  apiRoot: string = 'https://jsonplaceholder.typicode.com';
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
  getTwit(q) {
    this.http.post(`http://localhost:3000/twit`, q).subscribe(data => {
      this.twitResponse = JSON.parse(data['_body']);
      console.log(this.twitResponse);
    });
  }

}
