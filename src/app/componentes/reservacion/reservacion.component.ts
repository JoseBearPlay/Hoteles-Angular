import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservacion } from 'src/app/modelos/reservacion.model';
import { ReservacionService } from 'src/app/servicios/reservacion.service';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.scss'],
  providers: [ReservacionService]
})
export class ReservacionComponent implements OnInit {
  public reservacionModel: Reservacion;
  public reservacionList;
  public token;
  public identidad;

  constructor(
    private _reservacionService: ReservacionService,
    private _router:Router,
  ) {
    this.reservacionModel = new Reservacion('','','',0);
  }

  ngOnInit(): void {
    this.obtenerReservaciones();
  }

  agregarReservacion(){
    this._reservacionService.agregarReservacion(this.reservacionModel).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Evento registrado correctamente',
          showConfirmButton: false,
          timer: 1500
        })

        this._router.navigate(['/reservacion']);
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

  obtenerReservaciones(){
    this._reservacionService.obtenerReservaciones().subscribe(
      response=>{
        console.log(response.reservaciones);
        this.reservacionList = response.reservaciones;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Reservaciones obtenidas correctamente',
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

  obtenerReservacionID(id){
    this._reservacionService.obtenerReservacionID(id).subscribe(
      response=>{
        this.reservacionModel = response.reservacionEncontrada;
        console.log(response.reservacionEncontrada);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Reservaciones obtenidas correctamente',
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

  editarReservacion(){
    this._reservacionService.editarReservacion(this.reservacionModel).subscribe(
      response=>{
        console.log(response);
        this.obtenerReservaciones();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Reservaciones editadas correctamente',
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

  eliminarReservacion(id){
    this._reservacionService.eliminarReservacion(id).subscribe(
      response=>{
        console.log(response);
        this.obtenerReservaciones();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Reservaciones eliminadas correctamente',
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
