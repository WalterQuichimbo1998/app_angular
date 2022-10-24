import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConstLoginPage } from '@data/constants/pages/login/login.const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public data = ConstLoginPage

  public loginForm;


  constructor(private form_builder: FormBuilder) {
    this.loginForm = this.data.form
  }

  get isValidForm(){
    return (this.loginForm.email.isValid && this.loginForm.password.isValid());
  }
}
