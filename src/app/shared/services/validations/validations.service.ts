import { Injectable } from '@angular/core';
import { ErrorValidations } from '@data/constants/errors/errors-validations.const';
import { enum_validations_options } from '@data/enum';
import { IResponseValidations } from '@data/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {
  

  validateField(value: any, type: enum_validations_options) {
    switch (type) {
      case enum_validations_options.email:
        return this.validateEmail(value);
      case enum_validations_options.password:
        return this.validatePassword(value);
    }
  }

  private validateEmail(v: any): IResponseValidations {
    const response: IResponseValidations = { msg: '', isValid: true };
    const pattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    response.isValid = pattern.test(v)
    response.msg =(v=='') ? ErrorValidations.email_required_field:ErrorValidations.email_invalid;
    return response;
  }

  private validatePassword(v: any): IResponseValidations {
    const response: IResponseValidations = { msg: '', isValid: true };
    const pattern = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,29}$/
    response.isValid=pattern.test(v)
    response.msg=(v==='' ? ErrorValidations.password_required_field:ErrorValidations.password_required_pattern)
    return response
  }
}
