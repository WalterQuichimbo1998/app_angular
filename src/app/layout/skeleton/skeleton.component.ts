import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements AfterViewInit {

  public showLeftNav=true;
  public $theme:'blue-dark' | 'dark'|'red'|'yellow'='blue-dark';
  public loader='assets/images/default/logo.png';
  public isLoading=true;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading=false;
    }, 600);
    
  }

  showMenu(){
    this.showLeftNav=!this.showLeftNav;
  }
}
