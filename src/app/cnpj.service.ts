import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { Cnpj } from './cnpj';


@Injectable({
  providedIn: 'root'
})
export class cnpjService {

  idBuscado:any
  apiurl = 'http://localhost:8080/api/estate/';
  apiurlMedia = 'http://localhost:8080/api/estate/media';
  //API = `${environment.API}teste`; // adicionar a correta
  //private headers = { "Content-Type": "application/json" };
  constructor(private http: HttpClient) { }


  getCnpj(cnpj:any) {
   console.log (this.idBuscado);
       console.log (cnpj);
  // return this.http.get<Cnpj>(`${API_PATH}/{this.cnpj}`).toPromise();
  return this.http.get<Cnpj>(this.apiurl + cnpj).toPromise();
}


getMedia(value1:any, value2: any) {
  console.log (value1,value2);
  // return this.http.get<Cnpj>(`${API_PATH}/{this.cnpj}`).toPromise();
 return this.http.get(this.apiurlMedia + '?primeiroValor=' + value1 + '&segundoValor='+ value2 ).toPromise();
}

}
