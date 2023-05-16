import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register/register-user.component';
import { VerifyMailComponent } from './components/verify/verify-mail.component';
import { RecoverPasswordComponent } from './components/recover/recover-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'pokeHome', component: PokeHomeComponent },
  { path: 'pokeList', component: PokeListComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registerUser', component: RegisterUserComponent },
  { path: 'verifyMail', component: VerifyMailComponent },
  { path: 'recoverPassword', component: RecoverPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
