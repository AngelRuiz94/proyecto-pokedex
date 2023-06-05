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
  abilities?: any[] = [];
  totalAbilities?: number;

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
      setTimeout(() => {
        this.pokedexService.getAbility().subscribe(
          result$ => {
            // this.totalAbilities = result$.count;
            this.totalAbilities = 298;
            result$.results.forEach((result$: any) => {
              this.pokedexService.getAbilityToList(result$.name)
              .subscribe((oneResult$) =>{
                this.abilities.push(oneResult$);
              })
            });
            // console.log('Entra');
            // console.log(this.abilities);
            // for (let ab of this.abilities) {
            //   console.log('No entra');
            //   let ability: PokeAbility = {};
            //   ability.id = ab.id;
            //   ability.name = ab.name;
            //   for (let name_lang of ab.names) {
            //     if (name_lang == 'es') {
            //       ability.name_es = name_lang;
            //     }
            //   }
            //   if (ab.pokemon) {
            //     ability.pokemon = ab.pokemon[0].pokemon.name;
            //   }
            //   console.log(ability);
            //   this.pokeAbility.push(ability);
            // }
            // this.pokeAbility = this.pokeAbility.sort((a, b) => a.id - b.id);
            // console.log(this.pokeAbility);
            this.abilities = this.abilities.sort((a, b) => a.order - b.order);
            console.log(this.abilities);
          }
        )
      }, 200);
    }

  ngOnInit(): void {
  }
}
