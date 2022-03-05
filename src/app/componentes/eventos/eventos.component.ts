import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Evento } from '../../modelos/evento.model';
import { EventoService } from '../../servicios/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  providers: [EventoService]
})
export class EventosComponent implements OnInit {
  public eventoModel: Evento;
  public eventosList;
  public token;
  public identidad;

  constructor(
    private _eventoService: EventoService,
    private _router:Router
  ) {
    this.eventoModel = new Evento('','','','','');
  }

  ngOnInit(): void {
    this.obtenerEventos();
  }

  agregarEvento(){
    this._eventoService.agregarEvento(this.eventoModel).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Evento registrado correctamente',
          showConfirmButton: false,
          timer: 1500
        })

        this._router.navigate(['/eventos']
        );
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

  obtenerEventos(){
    this._eventoService.obtenerEventos().subscribe(
      response=>{
        console.log(response.eventos);
        this.eventosList = response.eventos;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Eventos obtenidos correctamente',
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

  obtenerEvento(id){
    this._eventoService.obtenerEvento(id).subscribe(
      response=>{
        this.eventoModel = response.eventoEncontrado;
        console.log(response.eventoEncontrado);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Eventos obtenidos correctamente',
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

  buscarEventoNombre(hotel:String){
    this._eventoService.buscarEventoNombre(this.eventoModel).subscribe(
      response=>{
        this.eventoModel = response.eventoEncontrado;
        console.log(response.eventoEncontrado);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Evento obtenido correctamente',
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

  editarEvento(){
    this._eventoService.editarEvento(this.eventoModel).subscribe(
      response=>{
        console.log(response);
        this.obtenerEventos();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Evento editado correctamente',
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

  eliminarEvento(id){
    this._eventoService.eliminarEvento(id).subscribe(
      response=>{
        console.log(response);
        this.obtenerEventos();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Evento eliminado correctamente',
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
