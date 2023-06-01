import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { environment } from 'src/environments/environment';
import { PokeAbility } from '../interfaces/pokeAbility';

@Injectable({
  providedIn: 'root'
})
export class ApiPokeService {
  baseUrl: string = environment.baseUrl;
  url: string = "";
  limit: number = 5000;

  constructor(
    private http: HttpClient
  ) { }

  //Pokemon
  getPokemonId(id: number): Observable<Pokemon> {
    this.url = `${this.baseUrl}pokemon/${id}`;
    return this.http.get<Pokemon>(this.url);
  }

  //Placeholder
  getPokemon(): Observable<any> {
    this.url = `${this.baseUrl}pokemon/25`;
    return this.http.get(this.url);
  }

  getPokemonToList(url: string): Observable<any> {
    return this.http.get(url);
  }

  // Ability
  getAbility(): Observable<any> {
    this.url = `${this.baseUrl}ability?offset=0&limit=${this.limit}`;
    return this.http.get(this.url);
  }

  getAbilityFromList(abilityUrl: string): Observable<PokeAbility> {
    console.log(abilityUrl);
    return this.http.get<PokeAbility>(abilityUrl);
  }

  // PokeList
  getPokeList(): Observable<any> {
    this.url = `${this.baseUrl}pokemon?offset=0&limit=${this.limit}`;
    return this.http.get(this.url);
  }

  getPokeFromList(pokeUrl: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(pokeUrl);
  }

  // Nature
  getNature(): Observable<any> {
    this.url = `${this.baseUrl}nature?offset=0&limit=${this.limit}`;
    return this.http.get(this.url);
  }

  getNatureFromList(natureUrl: string): Observable<PokeAbility> {
    console.log(natureUrl);
    return this.http.get<PokeAbility>(natureUrl);
  }

}
