import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import * as _ from 'lodash';

import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firebase:AngularFireDatabase,private datePipe: DatePipe) { }

  studentlist:AngularFireList<any>;

  form:FormGroup = new FormGroup ({
    $key: new FormControl(null),
    fullname:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    mobile:new FormControl('',[Validators.required,Validators.minLength(9),Validators.maxLength(11)]),
    city:new FormControl(''),
    gender:new FormControl('1'),
    department:new FormControl('0'),
    joinDate:new FormControl(''),
    isStateStudnet:new FormControl(false)
  });
  initializeValue(){
    this.form.setValue({
      $key:null,
      fullname:'',
      email:'',
      city:'',
      mobile:'',
      gender:'',
      department:'',
      joinDate:'',
      isStateStudnet:false
      });
  }

  getStudent(){
    this.studentlist = this.firebase.list('students');
    return this.studentlist.snapshotChanges();
  }

  insertStudent(student){
    this.studentlist.push({
    fullname:student.fullname,   
      email:student.email,
      city:student.city,
      mobile:student.mobile,
      gender:student.gender,
      department:student.department,
      joinDate:student.joinDate == "" ? "" : this.datePipe.transform(student.joinDate, 'yyyy-MM-dd'),
      isStateStudnet:student.isStateStudnet
    });
  }
  updateStudent(student){
    this.studentlist.update(student.$key,{
      fullname:student.fullname,   
      email:student.email,
      city:student.city,
      mobile:student.mobile,
      gender:student.gender,
      department:student.department,
      joinDate:student.joinDate == "" ? "" : this.datePipe.transform(student.joinDate, 'yyyy-MM-dd'),
      isStateStudnet:student.isStateStudnet
    });
  }

  deleteStudent($key:string){
    this.studentlist.remove($key);
  }
  populateForm(student){
   this.form.setValue(_.omit(student,'departmentName'));
    joinDate:student.joinDate == "" ? "" : this.datePipe.transform(student.joinDate, 'yyyy-MM-dd')

  }
}
