import { Component, OnInit, ViewChild } from '@angular/core';
import {StudentService} from '../../shared/student.service';
import{MatTableDataSource, MatSort, MatPaginator} from '@angular/material';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  listData:MatTableDataSource<any>;
  displayedColumns:string[] = ['fullname','city','department','email','mobile','actions'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  searchKey:string;

  constructor(private service:StudentService) { }

  ngOnInit() {

    this.service.getStudent().subscribe(
      list=>{
        let array = list.map(item=>{
          return{
            $key:item.key,
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
