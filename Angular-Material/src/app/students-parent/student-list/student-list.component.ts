import { Component, OnInit, ViewChild } from '@angular/core';
import {StudentService} from '../../shared/student.service';
import{MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { DepartmentService } from 'src/app/shared/department.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  listData:MatTableDataSource<any>;
  displayedColumns:string[] = ['fullname','city','department','email','mobile','departmentName','actions'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  searchKey:string;

  constructor(private service:StudentService,
    private depservice:DepartmentService) { }

  ngOnInit() {

    this.service.getStudent().subscribe(
      list=>{
        let array = list.map(item=>{
          let departmentName = this.depservice.getDepartmentName(item.payload.val()['department']);
          return{
            $key:item.key,
            departmentName,
            ...item.payload.val()
          }          
        });
        // Need list of data render into data table 
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      })
    }
    searchClear(){
      this.searchKey = " ";
      this.applyFilter();      
    }
    applyFilter(){
      this.listData.filter = this.searchKey.trim().toLowerCase();
    }


    
  }
