import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('container') public chartEl?: ElementRef;

  constructor(
    private pokedexService: ApiPokeService,
    private afAuth: AngularFireAuth,
    private router: Router
    ) {
      /* SESIONES */
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.router.navigate(['/pokeHome/pokeDetails'])

        } else {
          // this.router.navigate(['/login'])
        }
      })
    }

  ngOnInit(): void {
    this.getPokemonId(25);
  }

  // Pasándole un ID
  getPokemonId(id: number): void {
    this.pokedexService.getPokemonId(id)
      .subscribe(
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
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'HP',
        type: 'column',
        data: [
          this.getStats(0)
        ]
      },{
        name: 'Attack',
        type: 'column',
        data: [
          this.getStats(1)
        ]
      },{
        name: 'Defense',
        type: 'column',
        data: [
          this.getStats(2)
        ]
      },{
        name: 'Sp. Attack',
        type: 'column',
        data: [
          this.getStats(3)
        ]
      },{
        name: 'Sp. Defense',
        type: 'column',
        data: [
          this.getStats(4)
        ]
      },{
        name: 'Speed',
        type: 'column',
        data: [
          this.getStats(5)
        ]
      },
    ]
  });

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

  myFunc() {}
}
