import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Evento } from '../modelos/evento.model';


@Injectable({
  providedIn: 'root'
})
export class EventoService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   agregarEvento(evento: Evento): Observable<any>{
    let params = JSON.stringify(evento);
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.post(this.ruta + 'registarEvento', params, {headers: headersToken});
   }

   obtenerEventos(): Observable<any>{

    return this._http.get(this.ruta + 'obtenerEventos', {headers: this.headersVariable})
   }

   editarEvento(evento: Evento): Observable<any>{
     let params = JSON.stringify(evento);
     let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

     return this._http.put(this.ruta + 'editarEvento/' + evento._id , params, {headers: headersToken})
   }

   eliminarEvento(id:Evento): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.delete(this.ruta + 'eliminarEvento/' + id, {headers: headersToken});
   }

   obtenerEvento(id:String): Observable<any>{

    return this._http.get(this.ruta + 'obtenerEventoId/' + id, {headers: this.headersVariable});
   }

   buscarEventoNombre(evento: Evento):Observable<any>{
     let params = JSON.stringify(evento)
     let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

     return this._http.get(this.ruta + 'buscarEventoNombre', {headers: headersToken})
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
