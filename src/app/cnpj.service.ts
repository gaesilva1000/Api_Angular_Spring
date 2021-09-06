import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cnpj } from './cnpj';


@Injectable({
  providedIn: 'root'
})
export class cnpjService {

  idBuscado:any
  apiurl = 'http://localhost:8080/api/estate/';
  apiurlMedia = 'http://localhost:8080/api/estate/media';
  //API = `${environment.API}teste`; // adicionar a correta
  private headers = { "Content-Type": "application/json" };
 
  constructor(private http: HttpClient) { }


  getCnpj(cnpj:Cnpj) {
  const cnpjJson = JSON.stringify(cnpj);
  return this.http.get<Cnpj>(this.apiurl + cnpj).toPromise(),
  cnpjJson, {observe: 'response', headers: this.headers }
}


getMedia(value1:number, value2: number) {
  console.log (value1,value2);
   return this.http.get(this.apiurlMedia + '?primeiroValor=' + value1 + '&segundoValor='+ value2 ).toPromise();
}

}
