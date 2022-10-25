import { Component, Input, OnInit } from '@angular/core';
import { IFullTable } from './ifull-table.metadata';
import { FullTableService } from './services/full-table.service';

@Component({
  selector: 'app-full-table',
  templateUrl: './full-table.component.html',
  styleUrls: ['./full-table.component.scss']
})
export class FullTableComponent implements OnInit{


 /*  @Input() data:{head:Array<string>,body:Array<Array<string[]>>}={head:[],body:[]} */

 //@Input() data:Array<any>=[];

 @Input() service!:IFullTable;
 public tableService!:FullTableService;

 ngOnInit(): void {
  this.tableService=new FullTableService(this.service);
  this.tableService.initData();
}
}
