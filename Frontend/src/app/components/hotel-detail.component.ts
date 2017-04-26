import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelsService } from '../services/hotels.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hotel-detail',
  templateUrl: 'app/views/hotel-detail.html',
  providers: [HotelsService]
})

export class HotelDetailComponent implements OnInit{

  public hotel:Hotel;
  public status:string;
  public errorMessage:string;
  public loading:string;
  public title:string;
  public id:number;
  public messageDelete:string;
  public confirm:number;

  constructor(
    private _hotelsService:HotelsService,
    private _route:ActivatedRoute,
    private _router:Router
  ){
    this.title = "Hotel";
  }

  ngOnInit(){
    this.loading = "show";
    this.confirm = -1;
    this._route.params.subscribe(
      params => {
        this.id = params['id'];
      }
    );
    this.getHotel();
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

  onDeleteHotel(id:number){
    this.loading = "show";
    this._hotelsService.deleteHotel(id).subscribe(
      result => {
        this.status = result.status;
        this.messageDelete = result.message;
        this.loading = "hide";

        if(this.status !== 'success'){
          console.log(this.status);
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

  onDeleteConfirm(id:number){
    this.confirm = id;
  }

  onCancelConfirm(){
    this.confirm = -1;
  }
}
