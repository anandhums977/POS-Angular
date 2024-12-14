import { Route } from "@angular/router";
import { AdminDashboardComponent } from "./dashboard/admin-dashboard/admin-dashboard.component";



export const ADMIN_ROUTES: Route[] = [
    {path: 'dashboard', component: AdminDashboardComponent},
];
