import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterUserComponent } from './components/register/register-user.component';
import { VerifyMailComponent } from './components/verify/verify-mail.component';
import { RecoverPasswordComponent } from './components/recover/recover-password.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeHomeComponent,
    PokeListComponent,
    DashboardComponent,
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
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
