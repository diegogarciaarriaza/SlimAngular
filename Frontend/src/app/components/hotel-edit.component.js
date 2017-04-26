"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hotel_1 = require('../models/hotel');
var hotels_service_1 = require('../services/hotels.service');
var router_1 = require('@angular/router');
var HotelEditComponent = (function () {
    function HotelEditComponent(_hotelsService, _route, _router) {
        this._hotelsService = _hotelsService;
        this._route = _route;
        this._router = _router;
        this.title = "Edit hotel";
        this.hotel = new hotel_1.Hotel(1, "", "", "", "NULL", "");
    }
    HotelEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = "show";
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.getHotel();
    };
    HotelEditComponent.prototype.callPrice = function (value) {
        this.hotel.price = value;
    };
    HotelEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = "show";
        this._hotelsService.editHotel(this.hotel).subscribe(function (response) {
            _this.status = response.status;
            if (_this.status !== 'success') {
                console.log(response.message);
            }
            else {
                _this._router.navigate(["/"]);
            }
        }, function (error) {
            _this.errorMessage = error;
            console.log(_this.errorMessage);
        });
    };
    HotelEditComponent.prototype.getHotel = function () {
        var _this = this;
        this.loading = "show";
        this._hotelsService.getHotel(this.id).subscribe(function (response) {
            _this.status = response.status;
            _this.hotel = response.data;
            console.log(_this.hotel);
            _this.loading = "hide";
            if (_this.status !== 'success') {
                console.log(_this.status);
                _this._router.navigate(["/"]);
            }
        }, function (error) {
            _this.errorMessage = error;
            console.log(_this.errorMessage);
        });
    };
    HotelEditComponent = __decorate([
        core_1.Component({
            selector: 'hotel-edit',
            templateUrl: 'app/views/hotel-create.html',
            providers: [hotels_service_1.HotelsService]
        }), 
        __metadata('design:paramtypes', [hotels_service_1.HotelsService, router_1.ActivatedRoute, router_1.Router])
    ], HotelEditComponent);
    return HotelEditComponent;
}());
exports.HotelEditComponent = HotelEditComponent;
//# sourceMappingURL=hotel-edit.component.js.map