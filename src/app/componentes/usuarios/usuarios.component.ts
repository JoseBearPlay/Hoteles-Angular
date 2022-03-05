import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UsuarioService]
})
export class UsuariosComponent implements OnInit {
  public usuariosList;
  public usuarioIDModel: Usuario;
  constructor(private _usuarioService: UsuarioService) {
    this.usuarioIDModel = new Usuario('','','','','','','');
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuarioService.obtenerUsuarios().subscribe(
      response=>{
        console.log(response.usuarios);
        this.usuariosList = response.usuarios;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuarios obtenidos correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          position:'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  obtenerUsuarioId(id){
    this._usuarioService.obtenerUsuario(id).subscribe(
      response=>{
        this.usuarioIDModel = response.usuarioEncontrado;
        console.log(response.usuarioEncontrado);

      }
    )
  }

  editarUsuario(){
    this._usuarioService.editarUsuario(this.usuarioIDModel).subscribe(
      response=>{
        console.log(response);
        this.obtenerUsuarios();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario actualizado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          position:'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  eliminarUsuario(id){
    this._usuarioService.eliminarUsuario(id).subscribe(
      response=>{
        console.log(response);
        this.obtenerUsuarios();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario eliminado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          position:'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }


}
