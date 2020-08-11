import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyLibModule } from 'my-lib';
import { MyLib2Module } from 'my-lib2';

const CustomConfig = {
  url: 'some_value',
  key: 'some_value',
  secret: 'some_value',
  API: 'some_value',
  version: 'some_value'
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MyLibModule.forRoot(CustomConfig),
    MyLib2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
