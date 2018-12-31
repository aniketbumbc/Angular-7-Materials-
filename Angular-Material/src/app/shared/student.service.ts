import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firebase:AngularFireDatabase) { }

  studentlist:AngularFireList<any>;

  form:FormGroup = new FormGroup ({
    $key: new FormControl(null),
    fullName:new FormControl('',Validators.required),
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
      fullName:'',
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
    fullname:student.fullName,   
      email:student.email,
      city:student.city,
      mobile:student.mobile,
      gender:student.gender,
      department:student.department,
      joinDate:student.joinDate,
      isStateStudnet:student.isStateStudnet
    });
  }
  updateStudent(student){
    this.studentlist.update(student.$key,{
      fullname:student.fullName,   
      email:student.email,
      city:student.city,
      mobile:student.mobile,
      gender:student.gender,
      department:student.department,
      joinDate:student.joinDate,
      isStateStudnet:student.isStateStudnet
    });
  }

  deleteStudent($key:string){
    this.studentlist.remove($key);
  }
}
