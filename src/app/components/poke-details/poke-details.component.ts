import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ApiPokeService } from '../../service/api-poke.service';
import { Pokemon } from '../../interfaces/pokemon';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Ability } from 'src/app/interfaces/ability';
import { Stat } from 'src/app/interfaces/stat';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent {

  pokemon?: Pokemon;
  pokemonId?: number;
  abilities?: Array<Ability> = [];
  stats?: Array<Stat> = [];
  color?: string;
  @ViewChild('container') public chartEl?: ElementRef;

  constructor(
    private pokedexService: ApiPokeService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private renderer: Renderer2
    ) {
      /* SESIONES */
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.router.navigate(['/pokeHome/pokeDetails'])

        // } else {
          // this.router.navigate(['/login'])
        }
      })
    }

  ngOnInit(): void {
    this.getPokemonId(25);
  }

  // Pasándole un ID
  getPokemonId(id: number): void {
    this.pokedexService.getPokemonId(id).subscribe(
        result$ => {
          this.pokemon = result$;
          console.log(this.pokemon);
          for (let ab of this.pokemon.abilities) {
            if (ab.ability) {
              let ability: Ability = {
                name: ab.ability.name,
                is_hidden: ab.is_hidden
              };
              this.abilities?.push(ability);
            }
          }
          for (let st of this.pokemon.stats) {
            let stat: Stat = {
              base_stat: st.base_stat,
              name: st.stat?.name
            }
            this.stats?.push(stat);
          }
          setTimeout(() => {
            if (this.pokemon) {
              this.changeColor();
              this.generateChart(this.pokemon);
            }
          },100);
        });
  }

  generateChart(pokemon: Pokemon) {

    Highcharts.chart(this.chartEl?.nativeElement, {
      chart: {
        type: 'column'
      },
      title: {
        text: pokemon.name
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
        series: {
          dataLabels: {
            enabled: true
          }
        }
      },
      xAxis: {
        categories: [
          'HP',
          'Attack',
          'Defense',
          'Sp. Attack',
          'Sp. Defense',
          'Speed'
        ]
      },
      credits: {
        enabled: false
      },
      series: [{
        label: {
          enabled: false,
        },
        type: 'column',
        color: this.changeColor(),
        data: [
          this.getStats(0),
          this.getStats(1),
          this.getStats(2),
          this.getStats(3),
          this.getStats(4),
          this.getStats(5)

        ]
      }
    ]
  });

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
    return this.color;
  }

  getStats(position: number) {
    let stats: Array<number> = [];
    if (this.pokemon) {
      for (let stat of this.pokemon.stats) {
          stats.push(stat.base_stat);
      }
    }
    console.log(stats);
    return stats[position];
  }

  getPokemon(): void {
    if (this.pokemonId) {
    this.pokedexService.getPokemonId(this.pokemonId).subscribe(
      result$ =>{
        this.pokemon = result$;
        this.generateChart(this.pokemon);
        this.changeColor();
      }
      );
    }
  }

  myFunc() {}
}
