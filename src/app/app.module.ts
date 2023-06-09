import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { environment } from 'src/environments/environment';
import { SpinnerComponent } from './spinner/spinner.component';
import * as _Highcharts from "highcharts";
//Components
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { RegisterUserComponent } from './components/register/register-user.component';
import { VerifyMailComponent } from './components/verify/verify-mail.component';
import { RecoverPasswordComponent } from './components/recover/recover-password.component';
import { LoginComponent } from './components/login/login.component';
import { PokeAbilitiesComponent } from './components/poke-abilities/poke-abilities.component';
import { PokeNatureComponent } from './components/poke-nature/poke-nature.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeHomeComponent,
    PokeListComponent,
    PokeAbilitiesComponent,
    PokeNatureComponent,
    PokeDetailsComponent,
    NavigationComponent,
    LoginComponent,
    RegisterUserComponent,
    VerifyMailComponent,
    RecoverPasswordComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    TableModule,
    CardModule,
    InputNumberModule,
    InputTextModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
