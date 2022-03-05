import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuarioModel: Usuario;
  public token;
  public identidad;
  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {
    this.usuarioModel = new Usuario('','','','','','','');
  }

  ngOnInit(): void {
  }

  obtenerToken(){
    this._usuarioService.login(this.usuarioModel, 'true').subscribe(
      response=>{
        this.token = response.token;
        localStorage.setItem('token', this.token);
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  login(){
    this._usuarioService.login(this.usuarioModel).subscribe(
      response=>{
        this.identidad = response.usuarioEncontrado;
        localStorage.setItem('identidad', JSON.stringify(this.identidad))
        this.obtenerToken();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El usuario ingreso correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this._router.navigate(['/hotel'])
      },
      error=>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'El usuario ingreso de manera incorrecta',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

}
