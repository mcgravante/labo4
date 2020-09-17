import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { CalculoComponent } from './componentes/calculo/calculo.component';
import { HomeComponent } from './componentes/home/home.component';
import { SignInComponent } from './componentes/signin/signin.component';


const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'home', component : HomeComponent},
  { path: 'calculo', component: CalculoComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
