import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encuesta } from '../modelos/encuestas.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  public ruta: string;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   obtenerEncuestas(token): Observable<any>{
     let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.ruta + 'obtenerEncuestas', {headers: headersToken});
   }

   agregarEncuesta(encuesta:Encuesta, token): Observable<any>{
    let params = JSON.stringify(encuesta);
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.post(this.ruta + 'agregarEncuesta', params, {headers: headersToken})
   }
}
