import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../modelos/servicio.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosHotelService {
    public ruta: String;
    public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
    public token;
    public identidad;
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   agregarServicio(servicio: Servicio): Observable<any>{
     let params = JSON.stringify(servicio);
     let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

     return this._http.post(this.ruta + 'registrarServicio', params, {headers: headersToken});
   }

   obetenerServicios(): Observable<any>{
     return this._http.get(this.ruta + 'obtenerServicios', {headers: this.headersVariable});
   }

   obtenerServicio(id:String): Observable<any>{
     return this._http.get(this.ruta + 'obtenerServicioId/' + id, {headers: this.headersVariable});
   }

   editarServicio(servicio: Servicio): Observable<any>{
      let params = JSON.stringify(servicio);
      let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

      return this._http.put(this.ruta + 'editarServicio/' + servicio._id, params, {headers: headersToken});
   }

   eliminarServicio(id:Servicio): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.delete(this.ruta + 'eliminarServicio/' + id, {headers: headersToken});
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
