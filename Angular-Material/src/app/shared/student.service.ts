import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

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
}
