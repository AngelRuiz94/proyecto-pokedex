import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPokeService {
  // private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  // private baseUrl = 'https://pokeapi.co/api/v2/';
  baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getPokemonId(id: number): Observable<Pokemon> {
    const url = `${this.baseUrl}pokemon/${id}`;
    return this.http.get<Pokemon>(url);
  }

  getPokemon(): Observable<any> {
    const url = `${this.baseUrl}pokemon/pokemon/25`;
    return this.http.get(url);
  }

  getAbility(): Observable<any> {
    const url = `${this.baseUrl}pokemon/pokemon/25`;
    return this.http.get(url);
  }
}
