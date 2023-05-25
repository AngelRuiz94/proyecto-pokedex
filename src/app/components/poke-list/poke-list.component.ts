import { Component } from '@angular/core';
import { ApiPokeService } from '../../service/api-poke.service';
import { Pokemon } from '../../interfaces/pokemon';
import { PokeList } from '../../interfaces/pokeList';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent {

  pokemon?: Pokemon;
  pokeList: Array<PokeList> = [];
  pokemonId?: number;

  constructor(
    private pokedexService: ApiPokeService,
    private afAuth: AngularFireAuth,
    private router: Router
    ) {
      /* SESIONES */
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.router.navigate(['/pokeHome/pokeList'])
  
        } else {
          this.router.navigate(['/login'])
        }
      })
      // GET POKEMON
      if (this.pokemonId) {
      this.pokedexService.getPokemonId(this.pokemonId).subscribe(
        pokemon => this.pokemon = pokemon);
      }
      // GET POKEMON LIST
      this.pokedexService.getPokeList().subscribe(
        result$ => {
          if (result$) {
            console.log(result$);
            this.pokeList = result$.results;
            console.log(this.pokeList)
          }
        }
      )

    }

  ngOnInit(): void {
    this.getPokemonId(25);
  }

  // Pasándole un ID
  getPokemonId(id: number): void {
    this.pokedexService.getPokemonId(id).subscribe(
      pokemon => this.pokemon = pokemon);
  }
}
