import { Component, OnInit,Inject } from '@angular/core';
import{MAT_DIALOG_DATA,MatDialogRef} from  '@angular/material';


@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css']
})
export class MatDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef:MatDialogRef<MatDialogComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close(false);

  }
}
