import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  serverIp: string = environment.serverIp;

  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get<any>(this.serverIp + url, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

  postData(url, data) {
    return this.http.post<any>(this.serverIp + url, data, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }
}
