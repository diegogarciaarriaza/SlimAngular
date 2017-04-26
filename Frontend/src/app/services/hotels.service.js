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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var HotelsService = (function () {
    function HotelsService(_http) {
        this._http = _http;
    }
    HotelsService.prototype.getHotels = function () {
        return this._http.get("http://localhost/hotels.php/hotels")
            .map(function (res) { return res.json(); });
    };
    HotelsService.prototype.getHotel = function (id) {
        return this._http.get("http://localhost/hotels.php/hotel/" + id)
            .map(function (res) { return res.json(); });
    };
    HotelsService.prototype.deleteHotel = function (id) {
        return this._http.get("http://localhost/hotels.php/delete-hotel/" + id)
            .map(function (res) { return res.json(); });
    };
    HotelsService.prototype.createHotel = function (hotel) {
        var json = JSON.stringify(hotel);
        var params = "json=" + json;
        var headers = new http_1.Headers({ "Content-type": "application/x-www-form-urlencoded" });
        return this._http.post("http://localhost/hotels.php/hotels", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HotelsService.prototype.editHotel = function (hotel) {
        var json = JSON.stringify(hotel);
        var params = "json=" + json;
        var headers = new http_1.Headers({ "Content-type": "application/x-www-form-urlencoded" });
        return this._http.post("http://localhost/hotels.php/update-hotel/" + hotel.id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return HotelsService;
}());
HotelsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HotelsService);
exports.HotelsService = HotelsService;
//# sourceMappingURL=hotels.service.js.map