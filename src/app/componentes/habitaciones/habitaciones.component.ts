import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/modelos/habitacion.model';
import { HabitacionService } from 'src/app/servicios/habitacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.scss'],
  providers: [HabitacionService]
})
export class HabitacionesComponent implements OnInit {
  public habitacionList;
  public habitacionModel: Habitacion;
  public token;
  public identidad;
  constructor(
    private _habitacionService: HabitacionService,
    private _router:Router
    ) {
    this.habitacionModel = new Habitacion('','','','');
   }

  ngOnInit(): void {
    this.obtenerHabitaciones();
  }

  agregarHabitacion(){
    this._habitacionService.agregarHabitacion(this.habitacionModel).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Habitacion registrada correctamente',
          showConfirmButton: false,
          timer: 1500
        })

        this._router.navigate(['/habitaciones']);
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

  obtenerHabitaciones(){
    this._habitacionService.obtenerHabitaciones().subscribe(
      response=>{
        console.log(response.habitaciones);
        this.habitacionList = response.habitaciones;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Habitaciones obtenidas correctamente',
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

  obtenerHabitacion(id){
    this._habitacionService.obtenerHabitacionID(id).subscribe(
      response=>{
        this.habitacionModel = response.habitacionEncontrada;
        console.log(response.habitacionEncontrada);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Habitaciones obtenidas correctamente',
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

  obtenerHabitacionHotel(){
    this._habitacionService.buscarHabitacionHotel().subscribe(
      response=>{
        this.habitacionModel = response.hotelEncontrado;
        console.log(response.hotelEncontrado);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Habitaciones obtenidas correctamente',
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

  editarHabitacion(){
    this._habitacionService.editarHabitacion(this.habitacionModel).subscribe(
      response=>{
        console.log(response);
        this.obtenerHabitaciones();Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Habitaciones editadas correctamente',
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

  eliminarHabitacion(id){
    this._habitacionService.eliminarHabitacion(id).subscribe(
      response=>{
        console.log(response);
        this.obtenerHabitaciones();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Habitaciones Eliminadas correctamente',
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
