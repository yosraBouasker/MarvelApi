import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MarvelApp';
  marvel = '';

  constructor(private apiService:ServiceService){}

  getAll(){
  this.apiService.getData().subscribe( (data:any)=>{
   console.log(data);
  })
}
}
