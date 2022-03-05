import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { GLOBAL } from './global.service';
import { Hotel } from '../modelos/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'aplication/json');
  public token;
  public identidad;
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
  }

  registrarHotel(hotel: Hotel): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    let params = JSON.stringify(hotel);

    return this._http.post(this.ruta + 'registrarHotel', params, {headers: headersToken});
  }

  obtenerHoteles(): Observable<any>{
    return this._http.get(this.ruta + 'obtenerHoteles', {headers: this.headersVariable});
  }

  obtenerHotel(id:Hotel): Observable<any>{
    return this._http.get(this.ruta + 'obtenerHotelID/' + id, {headers: this.headersVariable});
  }

  obtenerHotelNombre(nombreHotel:Hotel): Observable<any>{

    return this._http.get(this.ruta + 'obtenerHotelNombre', {headers: this.headersVariable});
  }

  obtenerHotelDireccion(direccion:Hotel): Observable<any>{

    return this._http.get(this.ruta + 'obtenerHotelDireccion', {headers: this.headersVariable});
  }

  usuarioHospedado(id:Hotel): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.get(this.ruta + 'usuarioHospedado/' + id, {headers: headersToken});
  }

  editarHotel(hotel: Hotel): Observable<any>{
    let params = JSON.stringify(hotel);
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.put(this.ruta + 'editarHotel/' + hotel._id, params, { headers: headersToken});

  }

  eliminarHotel(id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.delete(this.ruta + 'eliminarHotel/' + id, {headers: headersToken});
  }

  obtenerIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem('identida'));
    if(identidad2 != 'undefined'){
      this.identidad = identidad2;
    }else{
      this.identidad = null;
    }

    return  this.identidad;
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
