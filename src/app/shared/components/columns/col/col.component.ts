import { Component, OnInit,Input, HostBinding } from '@angular/core';
import { ICol } from './icol.metadata';

@Component({
  selector: 'app-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss']
})
export class ColComponent implements OnInit {

  @Input() sizes:ICol={xs:12};
  @Input() classes = '';
  @HostBinding('class') class='';

 

  ngOnInit(): void {
    this.class=this.getSizes(this.sizes);
  }

  getSizes(sizes:ICol|any):string{
    let fclass=this.classes;
    for (const k in sizes) {
      if(Object.prototype.hasOwnProperty.call(sizes,k)){
        fclass+=` col-${k}-${sizes[k]}`;
      }
      
    }

    return fclass;
  }
}
