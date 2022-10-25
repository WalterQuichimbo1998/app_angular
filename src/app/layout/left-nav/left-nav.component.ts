import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { left_nav_menus } from '@data/constants/left-nav.menu.const';
import { ILeftNavMenu } from '@data/interfaces';
import { AuthService } from '@data/services/api/auth.service';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  
  @Output() showMenu=new EventEmitter<any>();
  public faBars=faBars;
  public name='Walter Quichimbo';
  public position = 'Gerente';
  public avatar='assets/images/default/avatar.jpg';
  public logo='assets/images/default/logo.png';
  public menus:ILeftNavMenu[]=left_nav_menus;
  public logoutMenu:ILeftNavMenu;

  public data:any;


  constructor(private auth_service:AuthService) { 
    this.data=this.auth_service.currentUserValue;
    this.logoutMenu={
      title:'',
      links:[
        {
          icon:faTimes,
          name:'Cerrar Sesión',
          method:()=>this.auth_service.logout()
        }
      ]
    }
  }

  ngOnInit(): void {
  }

}
