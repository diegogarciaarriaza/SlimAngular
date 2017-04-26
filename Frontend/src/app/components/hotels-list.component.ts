import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'hotels-list',
  templateUrl: 'app/views/hotels-list.html',
  providers: [HotelsService]
})

export class HotelsListComponent implements OnInit{

  public hotels:Hotel[];
  public status:string;
  public errorMessage:string;
  public loading:string;
  public title:string;
  public confirm:number;
  public messageDelete:string;

  constructor(private _hotelsService:HotelsService){
    this.title = "Hotels"
  }

  ngOnInit(){
    this.loading = "show";
    this.getHotels();
    this.confirm = -1;
  }

  getHotels(){
    this.loading = "show";
    this._hotelsService.getHotels().subscribe(
      result => {
        this.status = result.status;
        this.hotels = result.data;
        this.loading = "hide";

        if(this.status !== 'success'){
          console.log(this.status);
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
          this.getHotels();
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
