import { Routes } from '@angular/router';

// Import components for each route
import { IndexComponent }       from './car/index/index.component';
import { ViewComponent }        from './car/view/view.component';
import { CreateComponent }      from './car/create/create.component';
import { EditComponent }        from './car/edit/edit.component';
import { BookingComponent }     from './car/booking/booking.component';

// Define the routes for the Angular application
export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'car/index', component: IndexComponent },
    { path: 'car/:carId/view', component: ViewComponent },
    { path: 'car/create', component: CreateComponent },
    { path: 'car/:carId/edit', component: EditComponent},
    { path: 'car/booking', component: BookingComponent}
];
