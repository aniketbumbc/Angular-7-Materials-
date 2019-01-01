import { Injectable } from '@angular/core';
import{MatSnackBar,MatSnackBarConfig} from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private matsnackbar:MatSnackBar) { }

  config:MatSnackBarConfig={
  duration:3000,
  horizontalPosition:'right',
  verticalPosition:'top'
  }

  sucess(msg){
    this.config['panelClass'] = ['notification','success'];
    this.matsnackbar.open(msg,'',this.config);
  }
}
