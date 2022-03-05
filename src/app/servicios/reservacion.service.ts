import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './global.service';
import { Reservacion } from '../modelos/reservacion.model'

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type',  'application/json');
  public token;
  public identidad;
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   agregarReservacion(reservacion: Reservacion):Observable<any>{
     let params = JSON.stringify(reservacion);
     let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

     return this._http.post(this.ruta + 'agregarReservacion', params, {headers: headersToken});
   }

   obtenerReservaciones(): Observable<any>{
     let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

     return this._http.get(this.ruta + 'obtenerReservaciones', {headers: headersToken});
   }

   obtenerReservacionID(id:string):Observable<any>{
     return this._http.get(this.ruta + 'obtenerReservacionID/' + id, {headers: this.headersVariable});
   }

   editarReservacion(reservacion: Reservacion):Observable<any>{
    let params = JSON.stringify(reservacion);
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.put(this.ruta + 'editarReservacion/' + reservacion._id, params, {headers: headersToken});
   }

   eliminarReservacion(id:Reservacion):Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.delete(this.ruta + 'eliminarReservacion/'+ id, {headers: headersToken});
   }



   obtenerIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));
    if(identidad2 != 'undefined'){
      this.identidad = identidad2;
    }else{
      this.identidad = null;
    }

    return this.identidad;
  }

  obtenerToken(){
    var token2 = localStorage.getItem('token');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }

    return this.token;
  }
}
