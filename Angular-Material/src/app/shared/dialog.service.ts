import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  openConfirmDialog(msg){
  return  this.dialog.open(MatDialogComponent,{
      width:'400px',
      panelClass:'confirm-dialog-container',
      position:{top:"10px"},
      disableClose:true,
      data:{
        message:msg
      }
    });
  }
}
