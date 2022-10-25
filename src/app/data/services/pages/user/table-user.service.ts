import { Injectable } from '@angular/core';
import { IApiUser } from '@data/interfaces';
import { UserService } from '@data/services/api/user.service';
import { FullTableClass } from '@shared/components/tables/full-table/schema/full-table-class';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableUserService extends FullTableClass {

  constructor(private user_service:UserService) { 
    super();
    this.subjectTable=new BehaviorSubject<{
      data:IApiUser[];
      total:number;
    }>(this.initialData);
  }

  getData(): void {
    this.user_service.getApiUser().subscribe(r=>{
      console.log("llamando al servicio api")
      this.subjectTable.next({data:r.data,total:r.data.length});
    })
  }

  get getCurrentItems(): IApiUser[] {
    return this.subjectTable.value.data;
  }
}
