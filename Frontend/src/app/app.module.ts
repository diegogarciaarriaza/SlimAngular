import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { Router, ActivatedRoute} from "@angular/router";
import { FormsModule } from '@angular/forms';

//Config Router
import { routing, appRoutingProviders } from './app.routing'

//Componentes
import { AppComponent }  from './app.component';
import { HotelsListComponent } from './components/hotels-list.component';
import { HotelDetailComponent } from './components/hotel-detail.component';
import { HotelCreateComponent } from './components/hotel-create.component';
import { HotelEditComponent } from './components/hotel-edit.component';

//Pipes
//import {PruebasPipe} from "./pipes/pruebas-pipe";

@NgModule({
  imports:      [ BrowserModule , routing, HttpModule, JsonpModule, FormsModule ],
  declarations: [ AppComponent, HotelsListComponent, HotelDetailComponent, HotelCreateComponent,
    HotelEditComponent /*, PruebasPipe*/],
  providers:    [ appRoutingProviders ],
  bootstrap:    [ AppComponent ],

})

export class AppModule { }
