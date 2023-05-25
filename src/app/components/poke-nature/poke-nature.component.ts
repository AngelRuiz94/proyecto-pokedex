import { Component } from '@angular/core';
import { ApiPokeService } from '../../service/api-poke.service';
import { Pokemon } from '../../interfaces/pokemon';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-nature',
  templateUrl: './poke-nature.component.html',
  styleUrls: ['./poke-nature.component.css']
})
export class PokeNatureComponent {

  pokemon?: Pokemon;
  pokemonId?: number;
  natures: any[] = [];

  constructor(
    private pokedexService: ApiPokeService,
    private http: HttpClient,
    private afAuth: AngularFireAuth,
    private router: Router
    ) {
      /* SESIONES */
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.router.navigate(['/pokeHome/pokeNature'])
  
        } else {
          this.router.navigate(['/login'])
        }
      })
    }

  ngOnInit(): void {
    this.getPokemonId(25);
    this.fetchNatures();
  }

  // Pasándole un ID
  getPokemonId(id: number): void {
    this.pokedexService.getPokemonId(id).subscribe(
      pokemon => this.pokemon = pokemon);
  }

  fetchNatures() {
    const natureUrl = 'https://pokeapi.co/api/v2/nature/';

    // Realizar la petición GET a la API
    this.http.get<any>(natureUrl).subscribe(
      (response) => {
        this.natures = response.results;
        this.getAdditionalNatureInfo();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAdditionalNatureInfo() {
    for (const nature of this.natures) {
      this.http.get<any>(nature.url).subscribe(
        (response) => {
          nature.increased_stat = response.increased_stat;
          this.getPokemonInfo(nature);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  getPokemonInfo(nature: any) {
    this.http.get<any>(nature.pokemon.url).subscribe(
      (response) => {
        nature.pokemon = response.pokemon;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
}
