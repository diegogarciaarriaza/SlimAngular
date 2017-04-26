import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Hotel } from "../models/hotel";

@Injectable()
export class HotelsService{
  constructor(private _http:Http){}

  getHotels(){
    return this._http.get("http://localhost/hotels.php/hotels")
      .map(res => res.json());
  }

  getHotel(id:number){
    return this._http.get("http://localhost/hotels.php/hotel/"+id)
      .map(res => res.json());
  }

  deleteHotel(id:number){
    return this._http.get("http://localhost/hotels.php/delete-hotel/"+id)
      .map(res => res.json());
  }

  createHotel(hotel:Hotel){
    let json = JSON.stringify(hotel);
    let params = "json="+json;
    let headers = new Headers({"Content-type":"application/x-www-form-urlencoded"});

    return this._http.post("http://localhost/hotels.php/hotels", params, {headers: headers})
      .map(res => res.json());

  }

  editHotel(hotel:Hotel){
    let json = JSON.stringify(hotel);
    let params = "json="+json;
    let headers = new Headers({"Content-type":"application/x-www-form-urlencoded"});

    return this._http.post("http://localhost/hotels.php/update-hotel/"+hotel.id, params, {headers: headers})
      .map(res => res.json());

  }

}
