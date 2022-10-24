import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-user',
  templateUrl: './default-user.component.html',
  styleUrls: ['./default-user.component.scss']
})
export class DefaultUserComponent implements OnInit {

  public style = {
    background: 'red',

  };
  public msg = ''
  public isShow = false

  //directiva ngClass
  public class_style = ['dsc-card', 'dsc-card-primary']

  public cards: {
    title: string;
    body?: string;
    isPrimary: boolean;
    isDisabled: boolean;
  }[] = [
      {
        title: 'Tarjeta 1',
        isPrimary: true,
        isDisabled: false
      },
      {
        title: 'Tarjeta 2',
        isPrimary: false,
        isDisabled: false
      },
      {
        title: 'Tarjeta 3',
        isPrimary: true,
        isDisabled: true
      }
    ]

  constructor() { }

  ngOnInit(): void {
  }
  showError() {
    this.style.background = 'red';
    this.msg = '* Hubo un error';
    this.isShow = true;
  }

  showSuccess() {
    this.style.background = 'green';
    this.msg = '* Envió exitoso';
    this.isShow = true;
  }

  changeStatus(card: {
    title: string;
    body?: string;
    isPrimary: boolean;
    isDisabled: boolean;
  }) {
    card.isPrimary = !card.isPrimary;
  }

  disabledCard(card: {
    title: string;
    body?: string;
    isPrimary: boolean;
    isDisabled: boolean;
  }) {
    card.isDisabled = !card.isDisabled;
  }
}
