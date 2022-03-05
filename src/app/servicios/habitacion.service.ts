import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, resolveForwardRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Habitacion } from '../modelos/habitacion.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

  agregarHabitacion(habitacion: Habitacion): Observable<any>{
    let params = JSON.stringify(habitacion);
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.post(this.ruta + 'registrarHabitacion', params, {headers: headersToken});
  }

  obtenerHabitaciones(): Observable<any>{
    return this._http.get(this.ruta + 'obtenerHabitaciones', {headers: this.headersVariable})
  }

  obtenerHabitacionID(id:String):Observable<any>{
    return this._http.get(this.ruta + 'obtenerHabitacionID/' + id, { headers: this.headersVariable});
  }

  buscarHabitacionHotel(): Observable<any>{
    return this._http.get(this.ruta + 'buscarHabitacionHotel', {headers: this.headersVariable});
  }

  editarHabitacion(habitacion: Habitacion):Observable<any>{
    let params = JSON.stringify(habitacion);
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.put(this.ruta + 'editarHabitacion/' + habitacion._id, params, {headers: headersToken});

  }

  eliminarHabitacion(id:Habitacion): Observable<any>{
  let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

  return this._http.delete(this.ruta + 'eliminarHabitacion/'+ id, {headers: headersToken});
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
