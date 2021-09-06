import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
