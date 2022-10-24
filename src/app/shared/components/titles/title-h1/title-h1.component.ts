import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.scss']
})
export class TitleH1Component implements DoCheck {
  @Input() text = 'LISTADO DE USURIOS';
  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() price_pesos: number;
  @Input() data: Array<any>=[];

  public price_dollar: number;
  public price_euro: number;
  constructor() {
    this.text = '';
    this.type = 'primary';
    this.price_pesos = 0;
    this.price_dollar = 0;
    this.price_euro = 0;
  }
 

  getCurrentDollarApi() {
    return 22;
  }
  getCurrentEuroApi() {
    return 22.5;
  }
  // permite detectar cambios despues de cargar la ventana por datos
  /* ngOnChanges(c: SimpleChanges): void {
    if (c.price_pesos && c.price_pesos.currentValue) {
      this.price_pesos = c.price_pesos.currentValue;
      this.price_dollar = this.price_pesos * this.getCurrentDollarApi();
      this.price_euro = this.price_pesos * this.getCurrentEuroApi();
    }
    if(c.data && c.data.currentValue){
      console.log("cambiando");
    }
  } */

   // permite detectar cambios despues de cargar la ventana por muchos datos datos (se ejecuta despues de onChange) (no debe convivr con onchange)
   ngDoCheck(): void {
    this.price_dollar = this.price_pesos * this.getCurrentDollarApi();
      this.price_euro = this.price_pesos * this.getCurrentEuroApi();
      this.data.map(i=>{
        i.isActive=true;
      });
  }
}
