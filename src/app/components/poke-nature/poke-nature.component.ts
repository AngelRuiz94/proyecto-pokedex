import { Component } from '@angular/core';
import { ApiPokeService } from '../../service/api-poke.service';
import { Pokemon } from '../../interfaces/pokemon';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { PokeNature } from 'src/app/interfaces/pokeNature';
import { Nature } from 'src/app/interfaces/nature';

@Component({
  selector: 'app-poke-nature',
  templateUrl: './poke-nature.component.html',
  styleUrls: ['./poke-nature.component.css']
})
export class PokeNatureComponent {

  pokemon?: Pokemon;
  pokemonId?: number;
  naturelist?: PokeNature[] = [];
  natures?: Nature[] = [];

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
      // GET NATURE LIST
    this.pokedexService.getNature().subscribe(
      result$ => {
        this.naturelist = result$.results;
        console.log(this.naturelist);
        this.getNatureToList();
      }
    );
  }

  ngOnInit(): void {
    this.getPokemonId(25);
  }

  // Pasándole un ID
  getPokemonId(id: number): void {
    this.pokedexService.getPokemonId(id).subscribe(
      pokemon => this.pokemon = pokemon
      );
  }

  getNatureToList(): void {
    this.natures = [];
    for (let pokeNat of this.naturelist) {
      if (pokeNat.url) {
        this.pokedexService.getNatureToList(pokeNat.url).subscribe(
          result$ => {
            pokeNat.nature = result$;
            this.natures.push(pokeNat.nature);
          }
        )
      }
    }
    console.log(this.natures);
  }

}
