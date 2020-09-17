import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { CalculoComponent } from './componentes/calculo/calculo.component';
import { HomeComponent } from './componentes/home/home.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';
import { SignInComponent } from './componentes/signin/signin.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
    CalculoComponent,
    HomeComponent,
    ControlEntidadComponent,
    ListadoEntidadComponent,
    SignInComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
