import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },{
        path:"profile",
        component:ProfileComponent
    },{
        path:"dashboard",
        component:DashboardComponent
    }
];

