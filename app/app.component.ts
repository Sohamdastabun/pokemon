import { Component } from '@angular/core';
import {PokedataService} from './pokedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 data:any;
  constructor(private user:PokedataService){}
  ngOnInIt()
  {
    this.user.getPokeData().subscribe(data =>{
      console.warn("data",data)
      this.data=data
    })
  }
}
