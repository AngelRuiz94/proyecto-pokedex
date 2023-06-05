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

  loading: boolean = false;
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
    }

  ngOnInit(): void {
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
          this.abilities = this.abilities.sort((a, b) => a.id - b.id);
          console.log(this.abilities);
        }
      )
    }, 1000);
  }
}
