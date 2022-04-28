import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }
  //get pokemons
  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20');

//https://pokeapi.co/api/v2/pokemon/


  }
//get more data 
getMoreData(name :string){
  return this.http.get('https://pokeapi.co/api/v2/pokemon/${name}');
}


}
