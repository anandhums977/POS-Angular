import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CreateZonesComponent } from '../create-zones/create-zones.component';
import { SearchComponent } from '../../../common/search/search.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ButtonComponent } from '../../../common/button/button.component';
import { PersonDetailsComponent } from '../../../common/person-details/person-details.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-list-zones',
  standalone: true,
  imports: [
    MatTableModule,
    SearchComponent,
    MatPaginatorModule,
    ButtonComponent,
    MatSelectModule,
    DialogModule,
    MatFormFieldModule,
    MatMenuModule,
  ],
  templateUrl: './list-zones.component.html',
  styleUrl: './list-zones.component.scss',
})
export class ListZonesComponent {
  dialog = inject(Dialog);
  stateList = [
    {
      id: 1,
      name: 'State 1',
    },
    {
      id: 2,
      name: 'State 2',
    },
    {
      id: 3,
      name: 'State 3',
    },
  ];
  zonesList = new MatTableDataSource([
    { name: 'Zone 1', manager: 'Alice Johnson', state: 'Brazzaville' },
    { name: 'Zone 2', manager: 'Bob Smith', state: 'Pointe-Noire' },
    { name: 'Zone 3', manager: 'Charlie Davis', state: 'Niari' },
    { name: 'Zone 4', manager: 'David Brown', state: 'Sangha' },
    { name: 'Zone 5', manager: 'Emma Wilson', state: 'Kouilou' },
    { name: 'Zone 6', manager: 'Fiona Green', state: 'Likouala' },
    { name: 'Zone 7', manager: 'George Thompson', state: 'Lékoumou' },
    { name: 'Zone 8', manager: 'Hannah White', state: 'Cuvette' },
    { name: 'Zone 9', manager: 'Ian Walker', state: 'Plateaux' },
    { name: 'Zone 10', manager: 'Jack Taylor', state: 'Bouenza' },
  ]);
  displayedColumnsZonesListing = ['#', 'name', 'manager', 'state', 'actions'];
  deleteZone() {}
  editZone() {}

  CreateZoneDialog() {
    this.dialog.open(CreateZonesComponent, {
      minWidth: '300px',
    });
  }
  @ViewChild('paginator1') paginator1!: MatPaginator;
  ngOnInit() {
    this.zonesList.paginator = this.paginator1
  }
}
