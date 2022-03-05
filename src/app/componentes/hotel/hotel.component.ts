import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Hotel } from '../../modelos/hotel.model';
import { HotelService } from '../../servicios/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
  providers: [HotelService]
})
export class HotelComponent implements OnInit {
  public hotelModel: Hotel;
  public hotelList;
  public token;
  public identidad;

  constructor(
    private _hotelService: HotelService,
    private _router: Router
  ) {
    this.hotelModel = new Hotel('','','','','',0,'');
   }

  ngOnInit(): void {
    this.obtenerHoteles();
  }


  registrarHotel(){
    this._hotelService.registrarHotel(this.hotelModel).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Hotel registrado Correctamente',
          showConfirmButton: false,
          timer: 1500
        })

        this._router.navigate(['/hotel']);
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

  obtenerHoteles(){
    this._hotelService.obtenerHoteles().subscribe(
      response=>{
        console.log(response.hoteles);
        this.hotelList = response.hoteles;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Hoteles obtenidos correctamente',
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

  obtenerHotel(id){
    this._hotelService.obtenerHotel(id).subscribe(
      response=>{
        this.hotelModel = response.hotelEncontrado;
        console.log(response.hotelEncontrado);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Hoteles obtenidos correctamente',
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

  obtenerHotelNombre(nombre){
    this._hotelService.obtenerHotelNombre(nombre).subscribe(
      response=>{
        this.hotelModel = response.hotelNombreEncontrado;
        console.log(response.hotelNombreEncontrado);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Hotele obtenido correctamente',
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

  obtenerHotelDireccion(direccion){
    this._hotelService.obtenerHotelDireccion(direccion).subscribe(
      response=>{
        this.hotelModel = response.hotelDireccionEncontrado;
        console.log(response.hotelDireccionEncontrado);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Hotel obtenido correctamente',
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

  usuarioHospedado(id){
    this._hotelService.usuarioHospedado(id).subscribe(
      response=>{
        console.log(response);
        this.hotelModel = response.usuarioEncontrado;
        console.log(response.usuarioEncontrado);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario obtenido correctamente',
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

  editarHotel(){
    this._hotelService.editarHotel(this.hotelModel).subscribe(
      response=>{
        console.log(response);
        this.obtenerHoteles();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Hotele editado correctamente',
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

  eliminarHotel(id){
    this._hotelService.eliminarHotel(id).subscribe(
      response=>{
        console.log(response);
        this.obtenerHoteles();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Hotel eliminado correctamente',
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
