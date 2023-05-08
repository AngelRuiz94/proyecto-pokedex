import { Component } from '@angular/core';
import { ApiPokeService } from '../service/api-poke.service';
import { Pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'app-home-poke',
  templateUrl: './home-poke.component.html',
  styleUrls: ['./home-poke.component.css']
})
export class HomePokeComponent {

  pokemon?: Pokemon;
  pokemonId?: number;

  constructor(
    private pokedexService: ApiPokeService
    ) {}

  ngOnInit(): void {
    this.getPokemonId(25);
  }

  // Pasándole un ID
  getPokemonId(id: number): void {
    this.pokedexService.getPokemonId(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  // Pasándole
  // getPokemon() {
  //   this.pokedexService.getPokemon()
  //     .subscribe((data: any) => {
  //       this.pokemon = data;
  //       console.log(this.pokemon);
  //     });
  // }

  getPokemon(): void {
    if (this.pokemonId) {
    this.pokedexService.getPokemonId(this.pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    }
  }
}
