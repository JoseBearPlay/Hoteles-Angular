import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../modelos/factura.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   agregarFactura(factura: Factura): Observable<any>{
     let params = JSON.stringify(factura);
     let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.post(this.ruta + 'agregarFactura', params, {headers: headersToken});
   }

   obtenerFacturas(): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

     return this._http.get(this.ruta + 'obtenerFacturas', {headers: headersToken});
   }

   obtenerFacturaID(id:String):Observable<any>{
     return this._http.get(this.ruta + 'obtenerFacturaID/' + id, {headers: this.headersVariable});
   }

   editarFactura(factura: Factura):Observable<any>{
    let params = JSON.stringify(factura);
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.put(this.ruta + 'editarFactura/' + factura._id, params, {headers: headersToken});
   }

   eliminarFactura(id:Factura):Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.delete(this.ruta + 'eliminarFactura/' + id, {headers: headersToken});
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
