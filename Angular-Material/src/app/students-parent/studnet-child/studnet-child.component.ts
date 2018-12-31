import { Component, OnInit } from '@angular/core';
import{StudentService} from '../../shared/student.service';

@Component({
  selector: 'app-studnet-child',
  templateUrl: './studnet-child.component.html',
  styleUrls: ['./studnet-child.component.css']
})
export class StudnetChildComponent implements OnInit {

  constructor(private service: StudentService) { }

departments =[
{id:3,value:'Dep 1'},
{id:4,value:'Dep 2'},
{id:3,value:'Dep 3'}];

  ngOnInit() {

  }

  onClear(){
    this.service.form.reset();
    this.service.initializeValue();
  }

}
