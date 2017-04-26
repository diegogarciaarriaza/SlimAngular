"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
//Config Router
var app_routing_1 = require("./app.routing");
//Componentes
var app_component_1 = require("./app.component");
var hotels_list_component_1 = require("./components/hotels-list.component");
var hotel_detail_component_1 = require("./components/hotel-detail.component");
var hotel_create_component_1 = require("./components/hotel-create.component");
var hotel_edit_component_1 = require("./components/hotel-edit.component");
//Pipes
//import {PruebasPipe} from "./pipes/pruebas-pipe";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule, http_1.JsonpModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, hotels_list_component_1.HotelsListComponent, hotel_detail_component_1.HotelDetailComponent, hotel_create_component_1.HotelCreateComponent,
            hotel_edit_component_1.HotelEditComponent /*, PruebasPipe*/],
        providers: [app_routing_1.appRoutingProviders],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map