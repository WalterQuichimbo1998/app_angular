import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { carousel_data_item } from '@data/constants/carousel.const';
import { Users_Data } from '@data/constants/users.const';
import { UserService } from '@data/services/api/user.service';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { ICarouselItem } from '@shared/components/carousel/icarousel-item.metadata';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy, AfterViewInit {

  public carousel_data: ICarouselItem[];
  public users: ICardUser[];
  public title: string;
  public user_subsription?: Subscription;
  public price_pesos: number;

  public object:Array<any>;
  public object2:any;

  public string_var:string;
  public date_var:number;
  public current_var:number
  public decimal_var:number


  public tasks: { title: string }[] = [
    {
      title: 'primero'
    },
    {
      title: 'segundo'
    },
    {
      title: 'tercero'
    }
  ];
  public numeros = [
    'uno',
    'dos',
    'tres',
    'ninguno'
  ]

  constructor(private user_service: UserService) {
    this.carousel_data = carousel_data_item;
    this.users = [];
    this.user_service.setTitle('Listado de usuarios');
    this.title = this.user_service.getTitle();
    this.price_pesos = 0;
    this.object=[{id:1,name:'primero',joinDate:124343534}]
    this.object2=[{id:1,name:'primero',joinDate:124343534}]
    this.string_var='Hola este es un curso';
    this.date_var=(new Date()).getTime();
    this.decimal_var=3.4
    this.current_var=34.54
    /*  this.user_service.getApiUser().subscribe(r=>{
       if(!r.error){
         this.users=r.data;
       }
     }) */
  }
  //verifica que las variables esten inicializadas
  ngAfterViewInit(): void {
   
  }
//evaita carga toda la data
  trackById(index: number, item: Object) {
    return index;
  }


  new_user() {
    this.users.push(
      {
        id: 2,
        avatar: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        name: 'Walter Quichimbo',
        age: 24,
        description: 'Aprendiendo angular 2022'

      }
    );
  }
  //se ejecuta despues del constructor
  ngOnInit(): void {
    this.getUsers();
  }
  add_amount() {
    this.price_pesos += 10;
    this.object.push({
      id:this.object.length+1,
      name:'walter',
      joinDate:124343534
    })
  }


  getUsers() {
    this.user_subsription = this.user_service
      .getApiUser()
      .subscribe(r => this.users = (r.error) ? [] : r.data);
    /* this.user_service.getApiUser().subscribe(r=>{
      if(!r.error){
        this.users=r.data;
      }
    }) */
  }
  //se ejecuta al cambiar de ventana
  ngOnDestroy(): void {
    if (this.user_subsription) {
      this.user_subsription.unsubscribe();
      this.user_service.setTitle('Esto es un titulo');
    }
  }
}
