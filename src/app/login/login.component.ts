import { Router } from '@angular/router';
import { Usuario } from './../dto/usuario';
import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Usuario = new Usuario();
  constructor(private loginService: LoginService,
              private route: Router) { }

  ngOnInit(): void {

  }

  ingresar(): void {
    console.log(this.user.nombreUsuario, this.user.claveUsuario);
    console.log(this.user);
    this.loginService.login(this.user).subscribe(
      (resp) => {
        if(resp){
        this.route.navigate(['listamedicamento']);
        }else{
          alert("Vayase de aquí, impostor");
        }
      }
    );
  }

}
