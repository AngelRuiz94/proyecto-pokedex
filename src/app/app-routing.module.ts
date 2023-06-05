import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register/register-user.component';
import { VerifyMailComponent } from './components/verify/verify-mail.component';
import { RecoverPasswordComponent } from './components/recover/recover-password.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { PokeNatureComponent } from './components/poke-nature/poke-nature.component';
import { PokeAbilitiesComponent } from './components/poke-abilities/poke-abilities.component';

const routes: Routes = [
  // Components
  { path: 'pokeHome/pokeDetails', component: PokeDetailsComponent },
  { path: 'pokeHome/pokeList', component: PokeListComponent },
  { path: 'pokeHome', component: PokeHomeComponent },
  { path: 'pokeHome/pokeNature', component: PokeNatureComponent },
  { path: 'pokeHome/pokeAbilities', component: PokeAbilitiesComponent },
  // Login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '', redirectTo: 'pokeHome/pokeDetails', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registerUser', component: RegisterUserComponent },
  { path: 'verifyMail', component: VerifyMailComponent },
  { path: 'recoverPassword', component: RecoverPasswordComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
