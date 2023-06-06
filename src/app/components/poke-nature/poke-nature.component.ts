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

  // pokemon?: Pokemon;
  // pokemonId?: number;
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
        this.natures = [];
        this.naturelist = result$.results;
        console.log(this.naturelist);
      }
    );
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getNatureToList();
    }, 100);
  }

  getNatureToList(): void {
    console.log('Reinicia el nature');
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
    this.natures = this.natures.sort((a, b) => a.id - b.id);
    console.log('Natures ',this.natures);
  }

  getUpperCase(stat: string) {
    let statUpperCase: string = stat.charAt(0).toUpperCase() + stat.slice(1)
    return statUpperCase;
  }

}
