import { Component, OnInit } from '@angular/core';
import{StudentService} from '../../shared/student.service';
import{DepartmentService} from '../../shared/department.service';
import{NotificationService} from '../../shared/notification.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-studnet-child',
  templateUrl: './studnet-child.component.html',
  styleUrls: ['./studnet-child.component.css']
})
export class StudnetChildComponent implements OnInit {

  constructor(private service: StudentService,
    private depservice:DepartmentService,
    private notificationservice:NotificationService,
    private dialogRef:MatDialogRef<StudnetChildComponent>) { }

  ngOnInit() {
this.service.getStudent();
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeValue();
    this.notificationservice.sucess(':: Submitted successfully'); 
  }

  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('$key').value)
      this.service.insertStudent(this.service.form.value);
      else
      this.service.updateStudent(this.service.form.value);
      this.onClear();
      this.notificationservice.sucess(':: Submitted successfully');
      this.onClose();
    }
  }
  onClose(){
    this.service.form.reset();
    this.service.initializeValue();
    this.dialogRef.close();
  }
}
