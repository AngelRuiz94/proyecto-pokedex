import { Component } from '@angular/core';
import { ApiPokeService } from '../../service/api-poke.service';
import { Pokemon } from '../../interfaces/pokemon';
import { PokeAbility } from 'src/app/interfaces/pokeAbility';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-abilities',
  templateUrl: './poke-abilities.component.html',
  styleUrls: ['./poke-abilities.component.css']
})
export class PokeAbilitiesComponent {

  pokemon?: Pokemon;
  pokeAbility: Array<PokeAbility> = [];
  pokemonId?: number;

  constructor(
    private pokedexService: ApiPokeService,
    private afAuth: AngularFireAuth,
    private router: Router
    ) {
      /* SESIONES */
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.router.navigate(['/pokeHome/pokeAbilities'])
  
        } else {
          this.router.navigate(['/login'])
        }
      })
      // GET POKEMON
      // if (this.pokemonId) {
      // this.pokedexService.getPokemonId(this.pokemonId).subscribe(
      //   pokemon => this.pokemon = pokemon);
      // }
      // GET POKEMON LIST
      this.pokedexService.getAbility().subscribe(
        result$ => {
          if (result$) {
            this.pokeAbility = result$.results;
            console.log(this.pokeAbility)
            this.getPokemonToList();
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

  getPokemonToList(): void {
    for (let pokeAb of this.pokeAbility) {
      if (pokeAb.url) {
        this.pokedexService.getPokemonToList(pokeAb.url).subscribe(
          result$ => {
            pokeAb.pokemon = result$;
            console.log(pokeAb);
          }
        )
      }
    }
  }

  // getAbilityFromList(url: string) {
  //   let ability: any;
  //   this.pokedexService.getAbilityFromList(url).subscribe(
  //     result$ => {
  //       if (result$) {
  //         ability = result$;
  //         console.log(ability);
  //       }
  //     }
  //   )
  //   return ability.names[5].name;
  // }
}
