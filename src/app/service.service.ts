import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?apikey=35b62947cfcad885ea249ebffd4fa5ace2ccceac&hash=ffd275c5130566a2916217b101f26150')
  }
}
