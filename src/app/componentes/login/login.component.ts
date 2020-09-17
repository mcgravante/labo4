import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../classes/usuario';
import { Router } from '@angular/router';
import { AuthService } from "../../auth.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre: string;
  clave: string;

  usuario: Usuario;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }



  LogIn() {

    if (this.nombre === 'juan' && this.clave === 'juan123') {
      this.router.navigate(['calculo']);
    }
    else {
      this.router.navigate(['error']);
    }
  }
}

