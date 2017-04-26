import { Routes, RouterModule } from '@angular/router';
import { HotelsListComponent } from "./components/hotels-list.component";
import { HotelDetailComponent } from './components/hotel-detail.component';
import { HotelCreateComponent } from './components/hotel-create.component';
import { HotelEditComponent } from './components/hotel-edit.component';

const appRoutes:Routes = [
  {
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
  },
  { path: '', component: HotelsListComponent },
  { path: 'hotels', component: HotelsListComponent },
  { path: 'hotel/:id', component: HotelDetailComponent},
  { path: 'create-hotel', component: HotelCreateComponent },
  { path: 'edit-hotel/:id', component: HotelEditComponent }
]

export const appRoutingProviders:any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
