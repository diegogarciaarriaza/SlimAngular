import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelsService } from '../services/hotels.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hotel-edit',
  templateUrl: 'app/views/hotel-create.html',
  providers: [HotelsService]
})

export class HotelEditComponent implements OnInit {

  public hotel: Hotel;
  public status: string;
  public errorMessage: string;
  public loading: string;
  public title: string;
  public id: number;

  constructor(private _hotelsService: HotelsService,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.title = "Edit hotel";
    this.hotel = new Hotel(1, "", "", "", "NULL", "");
  }

  ngOnInit() {
    this.loading = "show";
    this._route.params.subscribe(
      params => {
        this.id = params['id'];
      }
    );
    this.getHotel();
  }

  callPrice(value:string){
    this.hotel.price = value;
  }

  onSubmit(){
    this.loading = "show";
    this._hotelsService.editHotel(this.hotel).subscribe(
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

  getHotel(){
    this.loading = "show";
    this._hotelsService.getHotel(this.id).subscribe(
      response => {

        this.status = response.status;
        this.hotel = response.data;
        console.log(this.hotel);

        this.loading = "hide";

        if(this.status !== 'success'){
          console.log(this.status);
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
