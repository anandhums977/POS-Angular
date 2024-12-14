import { Component, inject } from '@angular/core';
import { CreateZoneManagerComponent } from '../create-zone-manager/create-zone-manager.component';
import { SearchComponent } from '../../../../common/search/search.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ButtonComponent } from '../../../../common/button/button.component';
import { PersonDetailsComponent } from '../../../../common/person-details/person-details.component';
import {Dialog, DialogModule} from '@angular/cdk/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-list-zone-managers',
  standalone: true,
  imports: [    MatTableModule,
    SearchComponent,
    MatPaginatorModule,
    ButtonComponent,
    MatSelectModule,
    DialogModule,
    MatFormFieldModule,
    MatMenuModule],
  templateUrl: './list-zone-managers.component.html',
  styleUrl: './list-zone-managers.component.scss'
})
export class ListZoneManagersComponent {
  dialog = inject(Dialog);
  standsList =[
    {
    id:1,
    name:'Stand 1'
  },
  {
    id:2,
    name:'Stand 2'
  },
  {
    id:3,
    name:'Stand 3'
  }
]
zoneManagersListing:any =  new MatTableDataSource([
    {
      id: 1,
      name: "Alan",
      zone: "Zone 1",
      noOfTCA: 12,
      username: "Alan000",
      password: "***",
      collection: "500$",
    },
    {
      id: 2,
      name: "Don",
      zone: "Zone 2",
      noOfTCA: 13,
      username: "Don000",
      password: "***",
      collection: "500$",
    },
    {
      id: 3,
      name: "George",
      zone: "Zone 3",
      noOfTCA: 14,
      username: "George000",
      password: "***",
      collection: "500$",
    },
    {
      id: 4,
      name: "Tojo",
      zone: "Zone 4",
      noOfTCA: 15,
      username: "Tojo000",
      password: "***",
      collection: "500$",
    },
    {
      id: 5,
      name: "Jerin",
      zone: "Zone 5",
      noOfTCA: 16,
      username: "Jerin000",
      password: "***",
      collection: "500$",
    }
  ]);
  displayedColumnsZoneManagersListing = [
    '#',
    'name',
    'zone',
    'noOfTCA',
    'username',
    'password',
    'collection',
    'actions',
  ];
  deleteZoneManager() {}
  editZoneManager() {}
  openPersonDeatilsDialog(data:any) {
    this.dialog.open(PersonDetailsComponent, {
      minWidth: '300px',
      data: data
    });
  }  CreateZoneManagerDialog() {
    this.dialog.open(CreateZoneManagerComponent, {
      minWidth: '300px',
    });
  }
}
