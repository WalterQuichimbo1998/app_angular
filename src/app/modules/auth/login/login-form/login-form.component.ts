import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@data/services/api/auth.service';


@Component({
  selector: 'app-login-form, [app-login-form]',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

/*   public login_form: FormGroup;
 */  public login_form:any;
  public loginSubmitted = false;

  constructor(private form_builder: FormBuilder, private auth_service:AuthService) {
    this.login_form = this.form_builder.group({
      email: ['',
        [Validators.required,
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        )
        ]
      ],
      password: ['', [Validators.required, Validators.maxLength(10)]],
   /*    person: this.form_builder.group({
        name:['',[Validators.required,Validators.maxLength(35)]],
        lastname:['',[Validators.required,Validators.maxLength(35)]]
      }),
      intereses:this.form_builder.array([
        this.form_builder.control('',[Validators.required,Validators.minLength(10)])
      ]) */
    });
  }
  ngOnInit(): void {
    this.login_form.get('email')?.setValue('eve.holt@reqres.in');
  }

  /* public data = ConstLoginPage
  public loginForm;

  constructor(private form_builder: FormBuilder) {
    this.loginForm = this.data.form
  }

  get isValidForm() {
    return (this.loginForm.email.isValid && this.loginForm.password.isValid());
  } */

  get form() {
    return this.login_form.controls;
  }

  get fp(){
    return this.login_form.controls.person.controls;
  }

  get intereses(){
    return this.login_form.get('intereses') as FormArray;
  }

  addInteres(){
    console.log(this.intereses.length);
    if(this.intereses.length<5){
      this.intereses.push(this.form_builder.control('',[Validators.required,Validators.minLength(10)]));
    }else{
      return;
    }
    
  }
  deteleIntereses(index:number){
    this.intereses.removeAt(index);
  }

  autheticated() {
    this.loginSubmitted = true;
    if (!this.login_form.valid) {
      return;
    }
    //console.log("autorizado",this.login_form.value);
    this.auth_service.login(this.login_form.value).subscribe(r=>{
      console.log(r);
    })
  }

}
