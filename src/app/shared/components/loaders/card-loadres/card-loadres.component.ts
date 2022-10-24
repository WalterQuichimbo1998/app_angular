import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-loadres',
  templateUrl: './card-loadres.component.html',
  styleUrls: ['./card-loadres.component.scss']
})
export class CardLoadresComponent implements OnInit {

  //input style
  @Input() image_size = 75;
  @Input() bar_height = 15;
  @Input() bars = 1;

  // final properties

  public total_bars: { width: string}[] = []
  public final_style_image = {}
  public final_height_bar = `0`

  constructor() { }

  ngOnInit(): void {
    // calculate total bars
    for (let i = 0; i < this.bars; i++) {
      const width = Math.floor(Math.random() * (100 - 80)) + 60;
      this.total_bars.push({ width: `${width}%` });

    };
    // image style
    this.final_style_image = {
      width: `${this.image_size}px`,
      height: `${this.image_size}px`,
    }
    // bars style
    this.final_height_bar = `${this.bar_height}px`;
  }

}
