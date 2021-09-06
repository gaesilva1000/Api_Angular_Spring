import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cnpj } from './cnpj';
import { cnpjService } from './cnpj.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cnpj';
  
  public value1!: String;
  public value2! : String;
  public usuario = "";  
  cnpj: any;
  cnpjForm!: FormGroup;
  cnpjMask: string = '00.000.000/0000-00';

  constructor(
    private cnpjService: cnpjService,
    private formBuilder: FormBuilder
    ) {}

    ngOnInit(){
      
    }

    getMedia() {
      console.log(this.value1,this.value2,this.usuario)
       this.cnpjService.getMedia(this.value1,this.value2)
      .then(cnpj => console.log(this.value1,this.value2))
      .catch(error => console.error());

  }

  getCnpj() {
    this.cnpjService.getCnpj(this.cnpj)
  }
}
