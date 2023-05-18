import { Component } from '@angular/core';
import { ApiPokeService } from '../../service/api-poke.service';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-poke-abilities',
  templateUrl: './poke-abilities.component.html',
  styleUrls: ['./poke-abilities.component.css']
})
export class PokeAbilitiesComponent {

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
