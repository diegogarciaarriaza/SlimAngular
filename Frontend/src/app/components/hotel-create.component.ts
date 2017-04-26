import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelsService } from '../services/hotels.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hotel-create',
  templateUrl: 'app/views/hotel-create.html',
  providers: [HotelsService]
})

export class HotelCreateComponent implements OnInit {

  public hotel: Hotel;
  public status: string;
  public errorMessage: string;
  public loading: string;
  public title: string;
  public id: number;

  constructor(private _hotelsService: HotelsService,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.title = "Add new hotel";
    this.hotel = new Hotel(1, "", "", "", "NULL", "");
  }

  ngOnInit() {
    this.loading = "show";
  }

  callPrice(value:string){
    this.hotel.price = value;
  }

  onSubmit(){
    this.loading = "show";
    this._hotelsService.createHotel(this.hotel).subscribe(
      response => {
        this.status = response.status;
        if(this.status !== 'success'){
          console.log(response.message);
        }
        else{
          this._router.navigate(["/"]);
        }
      },
      error => {
        this.errorMessage = <any> error;
        console.log(this.errorMessage);
      }
    );
  }
}
