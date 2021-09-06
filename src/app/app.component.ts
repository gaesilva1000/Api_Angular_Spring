import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cnpj } from './cnpj';
import { cnpjService } from './cnpj.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cnpj';

  public value1!: number;
  public value2!: number;
  public usuario = "";
  cnpj: any;
  cnpjForm!: FormGroup;
  cnpjMask: string = '00.000.000/0000-00';

  constructor(
    private cnpjService: cnpjService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cnpjForm = this.formBuilder.group({
      cnpj: ["",
        [
          Validators.required,
          Validators.maxLength(18),
          
        ]
      ],
      /*value1: ["",
        [
          Validators.required
        ]
      ],
      value2: ["",
        [
          Validators.required
        ]

      ]*/


    })
  }

  getMedia() {

    this.cnpjService.getMedia(this.value1, this.value2)
      .then(cnpj => console.log(this.value1, this.value2))
      .catch(error => console.error());

  }

  getCnpj() {
    this.cnpjService.getCnpj(this.cnpj)
  }
}
