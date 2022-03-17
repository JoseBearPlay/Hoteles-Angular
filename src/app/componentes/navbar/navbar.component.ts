import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UsuarioService]
})
export class NavbarComponent implements OnInit {
  public identidad;
  constructor(
    public _usuarioService: UsuarioService
  ) {
    this.identidad = this._usuarioService.obtenerIdentidad();
   }

  ngOnInit(): void {
    console.log(this.identidad);
  }

  logout(){
    localStorage.clear()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se cerro sesion',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
