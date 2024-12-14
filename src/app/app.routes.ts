import { Routes } from '@angular/router';
import { LoginComponent } from './features/authentication/login/login.component';
import { RootAdminDashboardComponent } from './features/roles/root-admin/root-admin-dashboard/root-admin-dashboard.component';
import { OperationsManagerDashboardComponent } from './features/roles/operations-manager/operations-manager-dashboard/operations-manager-dashboard.component';
import { OperationsManagersListingComponent } from './features/roles/operations-manager/list-operations-managers/operations-managers-listing.component';
import { CreateTaxComponent } from './features/roles/root-admin/create-tax/create-tax.component';
import { ListZoneManagersComponent } from './features/roles/zone-managers/list-zone-managers/list-zone-managers.component';
import { TaxCollectionDataComponent } from './features/tax-collection-data/tax-collection-data.component';
import { ListZonesComponent } from './features/zones/list-zones/list-zones.component';
import { ListTaxCollectionAreaComponent } from './features/tax-collection-area/list-tax-collection-area/list-tax-collection-area.component';
import { ListPosComponent } from './features/pos/list-pos/list-pos.component';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login if no route is specified
  { path: 'login', component: LoginComponent },
  { path: 'root-admin', component: RootAdminDashboardComponent },
  {
    path: 'operations-manager-dashboard',
    component: OperationsManagerDashboardComponent,
  },
  {
    path: 'tax-collection-data',
    component: TaxCollectionDataComponent,
  },
  {
    path: 'operations-manager-listing',
    component: OperationsManagersListingComponent,
  },
  {
    path: 'zone-manager-listing',
    component: ListZoneManagersComponent,
  },
  {
    path: 'create-tax',
    component: CreateTaxComponent,
  },
  {
    path: 'zones-list',
    component: ListZonesComponent,
  },
  {
    path: 'pos-list',
    component: ListPosComponent,
  },
  {
    path: 'area-list',
    component: ListTaxCollectionAreaComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/roles/admin-module/admin.routes').then(
        (m) => m.ADMIN_ROUTES
      ),
  },
];
