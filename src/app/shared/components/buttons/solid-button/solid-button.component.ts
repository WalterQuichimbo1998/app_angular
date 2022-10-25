import { Component, Input, Output,EventEmitter } from '@angular/core';
import { solid_button_type } from '@data/enum/solid-button-type';

@Component({
  selector: 'app-solid-button',
  templateUrl: './solid-button.component.html',
  styleUrls: ['./solid-button.component.scss']
})
export class SolidButtonComponent {

@Input() title='';
@Input() type=solid_button_type.primary;
@Input() url='';

@Output() action=new EventEmitter();
}
