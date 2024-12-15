import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoaderComponent } from '../../common/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private dialogRef: MatDialogRef<LoaderComponent> | null = null;
  private loaderRef: any = null;  // Reference to the current dialog instance
  private isLoaderOpen = false;  
  constructor(private dialog: MatDialog) {}


  show(): void {
    if (this.isLoaderOpen) {
      this.hide();  // Hide previous loader if open
    }

    // Open the loader dialog and set the flag
    this.loaderRef = this.dialog.open(LoaderComponent, {
      disableClose: true,  // Prevent closing when clicking outside
      panelClass: 'custom-loader'  // Optional, for custom styling
    });
    this.isLoaderOpen = true;
  }


  hide(): void {
    if (this.isLoaderOpen && this.loaderRef) {
      this.loaderRef.close(); // Close the current loader
      this.isLoaderOpen = false;  // Reset the flag
    }
  }
}






















