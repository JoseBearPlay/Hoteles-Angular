import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/modelos/factura.model';
import { FacturaService } from 'src/app/servicios/factura.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss'],
  providers: [FacturaService]
})
export class FacturaComponent implements OnInit {
  public facturaList;
  public facturaModel: Factura;
  public token;
  public identidad;
  constructor(
    private _facturaService: FacturaService,
    private _router:Router
    ) {
    this.facturaModel = new Factura('',
    '',
    '',
    '',
    '',
    0,
    '',
    '',
    0,
    0,
    0,
    0)
  }
  ngOnInit(): void {
    this.obtenerFacturas();
  }

  agregarFactura(){
    this._facturaService.agregarFactura(this.facturaModel).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Evento registrado correctamente',
          showConfirmButton: false,
          timer: 150
        })

        this._router.navigate(['/factura'])
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

  obtenerFacturas(){
    this._facturaService.obtenerFacturas().subscribe(
      response=>{
        console.log(response.facturas);
        this.facturaList = response.facturas;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Facturas obtenidas correctamente',
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

  obtenerFacturaID(id){
    this._facturaService.obtenerFacturaID(id).subscribe(
      response=>{
        this.facturaModel = response.facturaEncontrada;
        console.log(response.facturaEncontrada);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Facturas obtenidos correctamente',
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

  editarFactura(){
    this._facturaService.editarFactura(this.facturaModel).subscribe(
      response=>{
        console.log(response);
        this.obtenerFacturas();Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Factura obtenida correctamente',
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

  eliminarFactura(id){
    this._facturaService.eliminarFactura(id).subscribe(
      response=>{
        console.log(response);
        this.obtenerFacturas();Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Factura Eliminada correctamente',
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
