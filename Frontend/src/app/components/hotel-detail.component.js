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
var core_1 = require("@angular/core");
var hotels_service_1 = require("../services/hotels.service");
var router_1 = require("@angular/router");
var HotelDetailComponent = (function () {
    function HotelDetailComponent(_hotelsService, _route, _router) {
        this._hotelsService = _hotelsService;
        this._route = _route;
        this._router = _router;
        this.title = "Hotel";
    }
    HotelDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = "show";
        this.confirm = -1;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.getHotel();
    };
    HotelDetailComponent.prototype.getHotel = function () {
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
    HotelDetailComponent.prototype.onDeleteHotel = function (id) {
        var _this = this;
        this.loading = "show";
        this._hotelsService.deleteHotel(id).subscribe(function (result) {
            _this.status = result.status;
            _this.messageDelete = result.message;
            _this.loading = "hide";
            if (_this.status !== 'success') {
                console.log(_this.status);
            }
            else {
                _this._router.navigate(["/"]);
            }
        }, function (error) {
            _this.errorMessage = error;
            console.log(_this.errorMessage);
        });
    };
    HotelDetailComponent.prototype.onDeleteConfirm = function (id) {
        this.confirm = id;
    };
    HotelDetailComponent.prototype.onCancelConfirm = function () {
        this.confirm = -1;
    };
    return HotelDetailComponent;
}());
HotelDetailComponent = __decorate([
    core_1.Component({
        selector: 'hotel-detail',
        templateUrl: 'app/views/hotel-detail.html',
        providers: [hotels_service_1.HotelsService]
    }),
    __metadata("design:paramtypes", [hotels_service_1.HotelsService,
        router_1.ActivatedRoute,
        router_1.Router])
], HotelDetailComponent);
exports.HotelDetailComponent = HotelDetailComponent;
//# sourceMappingURL=hotel-detail.component.js.map