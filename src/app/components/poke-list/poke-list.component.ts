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
  pokemons: any[] = [];
  page: number = 1;
  itemsPerPage: number = 10;
  totalPokemons: number;
  color: string;

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

    }

  ngOnInit(): void {
    // this.getPokemonId(25);
    this.getPokemons();
  }

  getPokemons() {
    // GET POKEMON LIST
    this.pokedexService.getPokeList(this.itemsPerPage, this.page -1)
    .subscribe((result$: any) => {
      console.log('Pagina ',this.page);
      this.totalPokemons = result$.count;
      result$.results.forEach((result$: any) => {
        this.pokedexService.getPokeToList(result$.name)
        .subscribe((oneResult$) =>{
          this.pokemons.push(oneResult$);
        })
      });
      this.pokemons = this.pokemons.sort((a, b) => a.order - b.order);
      }
    )
  }

  // Pasándole un ID
  getPokemonId(id: number): void {
    this.pokedexService.getPokemonId(id).subscribe(
      pokemon => this.pokemon = pokemon);
  }
  changeColor() {
    if (this.pokemon.types[0].type.name == "normal") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--normal');
    } else if (this.pokemon.types[0].type.name == "fighting") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--fighting');
    } else if (this.pokemon.types[0].type.name == "flying") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--flying');
    } else if (this.pokemon.types[0].type.name == "poison") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--poison');
    } else if (this.pokemon.types[0].type.name == "ground") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--ground');
    } else if (this.pokemon.types[0].type.name == "rock") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--rock');
    } else if (this.pokemon.types[0].type.name == "bug") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--bug');
    } else if (this.pokemon.types[0].type.name == "ghost") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--ghost');
    } else if (this.pokemon.types[0].type.name == "steel") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--steel');
    } else if (this.pokemon.types[0].type.name == "fire") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--fire');
    } else if (this.pokemon.types[0].type.name == "water") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--water');
    } else if (this.pokemon.types[0].type.name == "grass") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--grass');
    } else if (this.pokemon.types[0].type.name == "electric") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--electric');
    } else if (this.pokemon.types[0].type.name == "psychic") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--psychic');
    } else if (this.pokemon.types[0].type.name == "ice") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--ice');
    } else if (this.pokemon.types[0].type.name == "dragon") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--dragon');
    } else if (this.pokemon.types[0].type.name == "dark") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--dark');
    } else if (this.pokemon.types[0].type.name == "fairy") {
      this.color = getComputedStyle(document.documentElement).getPropertyValue('--fairy');
    }
    console.log(this.color);
  }

}
