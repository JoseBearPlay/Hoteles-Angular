import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Servicio } from '../../modelos/servicio.model';
import { ServiciosHotelService } from '../../servicios/servicios-hotel.service';

@Component({
  selector: 'app-servicios-hotel',
  templateUrl: './servicios-hotel.component.html',
  styleUrls: ['./servicios-hotel.component.scss'],
  providers: [ServiciosHotelService]
})
export class ServiciosHotelComponent implements OnInit {
  public servicioModel: Servicio;
  public serviciosList;
  public token;
  public identidad;

  constructor(
    private _serviciosHotelService: ServiciosHotelService,
    private _router:Router
  ) {
    this.servicioModel = new Servicio('','','');
  }

  ngOnInit(): void {
    this.obetenerServicios();
  }

  agregarServicio(){
    this._serviciosHotelService.agregarServicio(this.servicioModel).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Servicio registrado correctamente',
          showConfirmButton: false,
          timer: 1500
        })

        this._router.navigate(['/servicios']
        );
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  obetenerServicios(){
    this._serviciosHotelService.obetenerServicios().subscribe(
      response=>{
        console.log(response.servicios);
        this.serviciosList = response.servicios;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Servicios obtenidos correctamente',
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

    obtenerServicio(id){
      this._serviciosHotelService.obtenerServicio(id).subscribe(
        response=>{
          this.servicioModel = response.servicioEncontrado;
          console.log(response.servicioEncontrado);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Servicios obtenidos correctamente',
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

    editarServicio(){
      this._serviciosHotelService.editarServicio(this.servicioModel).subscribe(
        response=>{
          console.log(response);
          this.obetenerServicios();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Servicios editados correctamente',
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

    eliminarServicio(id){
      this._serviciosHotelService.eliminarServicio(id).subscribe(
        response=>{
          console.log(response);
          this.obetenerServicios();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Servicios eliminados correctamente',
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
