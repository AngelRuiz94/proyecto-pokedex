import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiPokeService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient
  ) { }

  getPokemonId(id: number): Observable<Pokemon> {
    const url = `${this.baseUrl}${id}`;
    return this.http.get<Pokemon>(url);
  }

  getPokemon(): Observable<any> {
    const url = `${this.baseUrl}/pokemon/25`;
    return this.http.get(url);
  }
}
