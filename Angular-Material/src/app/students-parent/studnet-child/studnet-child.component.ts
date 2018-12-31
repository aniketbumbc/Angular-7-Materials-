import { Component, OnInit } from '@angular/core';
import{StudentService} from '../../shared/student.service';
import{DepartmentService} from '../../shared/department.service';

@Component({
  selector: 'app-studnet-child',
  templateUrl: './studnet-child.component.html',
  styleUrls: ['./studnet-child.component.css']
})
export class StudnetChildComponent implements OnInit {

  constructor(private service: StudentService,
    private depservice:DepartmentService) { }
    
  ngOnInit() {
this.service.getStudent();
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeValue();
  }

  onSubmit(){
    if(this.service.form.valid){
      this.service.insertStudent(this.service.form.value);
      this.onClear();
    }

  }

}
