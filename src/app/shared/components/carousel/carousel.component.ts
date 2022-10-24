import { Component, Input, OnInit } from '@angular/core';
import { carousel_data_item } from '@data/constants/carousel.const';
import { ICarouselItem } from './icarousel-item.metadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  /**
   * Custom properties
   */

  @Input() height = 500;
  @Input() isFullScreem = false;
  @Input() items: ICarouselItem[]=[];

  /**
   * Panel properties
   */

  public finalHeight: string | number = 0;
  public currentPosition = 0;


  constructor() {
    this.finalHeight = this.isFullScreem ? '100vh' : `${this.height}px`;
  }

  ngOnInit(): void {
    this.items.map((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    });
    console.log(this.items);
  }
  setCurrentPosition(position: number) {
    this.currentPosition = position;
    this.items.find((i)=>{
      if(i.id===0){
        i.marginLeft=-100*position;
      }
    })
  }

  nextPosition(){
    let finalPorcentage=0;
    let nextPosition=this.currentPosition+1;
    
    if(nextPosition<=this.items.length-1){
      finalPorcentage=-100*nextPosition;
    }else{
      nextPosition=0;
    }
    this.items.find((i)=>{
      console.log(nextPosition);
      if(i.id===0){
        i.marginLeft=finalPorcentage;
       
      }
    })
    this.currentPosition=nextPosition;
  }
  previewPosition(){
    let finalPorcentage=0;
    let previewPosition=this.currentPosition-1;
    if(previewPosition>=0){
      finalPorcentage=-100*previewPosition;
    }else{
      previewPosition=this.items.length-1;
      finalPorcentage=-100*previewPosition;
    }
    this.items.find((i)=>{
      if(i.id===0){
        i.marginLeft=finalPorcentage;
      }
    })
    this.currentPosition=previewPosition;
  }
}
