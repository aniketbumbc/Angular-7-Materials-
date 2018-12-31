import { Component, OnInit } from '@angular/core';
import{StudentService} from '../../shared/student.service';

@Component({
  selector: 'app-studnet-child',
  templateUrl: './studnet-child.component.html',
  styleUrls: ['./studnet-child.component.css']
})
export class StudnetChildComponent implements OnInit {

  constructor(private service: StudentService) { }

  ngOnInit() {
  }

}
