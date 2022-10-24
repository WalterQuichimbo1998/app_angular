import { ErrorValidations } from "@data/constants/errors/errors-validations.const";
import { enum_validations_options } from "@data/enum";
import { IField } from "@data/interfaces"
import { ValidationsService } from "@shared/services/validations/validations.service";

export const ConstLoginPage: {
    form: {
        email: IField;
        password: IField
    }
} = {
    form: {
        email: {
            val: '',
            error: ErrorValidations.email_required_field,
            isValid() {
                const validationService = new ValidationsService();
                const validationEmail = validationService.validateField(this.val, enum_validations_options.email);
                this.error = validationEmail.msg;
                return validationEmail.isValid;
            }
        },
        password: {
            val: '',
            error: ErrorValidations.password_required_field,
            isValid() {
                const validationService = new ValidationsService();
                const validationpassword = validationService.validateField(this.val, enum_validations_options.password);
                this.error = validationpassword.msg;
                return validationpassword.isValid;
            }
        }
    }
}