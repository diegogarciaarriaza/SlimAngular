"use strict";
var router_1 = require("@angular/router");
var hotels_list_component_1 = require("./components/hotels-list.component");
var hotel_detail_component_1 = require("./components/hotel-detail.component");
var hotel_create_component_1 = require("./components/hotel-create.component");
var hotel_edit_component_1 = require("./components/hotel-edit.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: '', component: hotels_list_component_1.HotelsListComponent },
    { path: 'hotels', component: hotels_list_component_1.HotelsListComponent },
    { path: 'hotel/:id', component: hotel_detail_component_1.HotelDetailComponent },
    { path: 'create-hotel', component: hotel_create_component_1.HotelCreateComponent },
    { path: 'edit-hotel/:id', component: hotel_edit_component_1.HotelEditComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map