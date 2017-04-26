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
var HotelsListComponent = (function () {
    function HotelsListComponent(_hotelsService) {
        this._hotelsService = _hotelsService;
        this.title = "Hotels";
    }
    HotelsListComponent.prototype.ngOnInit = function () {
        this.loading = "show";
        this.getHotels();
        this.confirm = -1;
    };
    HotelsListComponent.prototype.getHotels = function () {
        var _this = this;
        this.loading = "show";
        this._hotelsService.getHotels().subscribe(function (result) {
            _this.status = result.status;
            _this.hotels = result.data;
            _this.loading = "hide";
            if (_this.status !== 'success') {
                console.log(_this.status);
            }
        }, function (error) {
            _this.errorMessage = error;
            console.log(_this.errorMessage);
        });
    };
    HotelsListComponent.prototype.onDeleteHotel = function (id) {
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
                _this.getHotels();
            }
        }, function (error) {
            _this.errorMessage = error;
            console.log(_this.errorMessage);
        });
    };
    HotelsListComponent.prototype.onDeleteConfirm = function (id) {
        this.confirm = id;
    };
    HotelsListComponent.prototype.onCancelConfirm = function () {
        this.confirm = -1;
    };
    return HotelsListComponent;
}());
HotelsListComponent = __decorate([
    core_1.Component({
        selector: 'hotels-list',
        templateUrl: 'app/views/hotels-list.html',
        providers: [hotels_service_1.HotelsService]
    }),
    __metadata("design:paramtypes", [hotels_service_1.HotelsService])
], HotelsListComponent);
exports.HotelsListComponent = HotelsListComponent;
//# sourceMappingURL=hotels-list.component.js.map