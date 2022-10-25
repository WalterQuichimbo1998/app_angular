import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users_Data } from '@data/constants/users.const';
import { solid_button_type } from '@data/enum/solid-button-type';
import { UserService } from '@data/services/api/user.service';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{

  public users: ICardUser[] = Users_Data;
  public id: number;
  public title:string;
  public data: ICardUser| undefined;
  public $btnTypes = solid_button_type;

  constructor(private route: ActivatedRoute, private user_service:UserService) {
    
    this.id = this.route.snapshot.params.id;
    this.title=user_service.getTitle();
    //this.data = this.users.find(user => user.id === +this.id);
    //console.log({ user: this.data });
  }
  ngOnInit(): void {
   this.user_service.getUserById(this.id).subscribe(r=>{
    this.data=r.data;
   })
  }

}
