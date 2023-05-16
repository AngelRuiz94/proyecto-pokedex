import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePokeComponent } from './components/home-poke/home-poke.component';

const routes: Routes = [
  { path: 'homePoke', component: HomePokeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
