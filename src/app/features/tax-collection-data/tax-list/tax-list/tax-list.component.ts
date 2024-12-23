import { Component } from '@angular/core';
import { TableComponent } from '../../../../common/table/table.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../../../../common/confirmation/confirmation.component';

@Component({
  selector: 'app-tax-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './tax-list.component.html',
  styleUrl: './tax-list.component.scss'
})
export class TaxListComponent {
constructor(private dialog:MatDialog){

}

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '400px',
      data: { type: 'confirmation' }  // Pass any data if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
    });
  }
}
