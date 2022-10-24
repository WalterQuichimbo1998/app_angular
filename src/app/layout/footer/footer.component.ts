import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html', 
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public faYoutube =faHome;
  public faTwitter =faHome;
  public faFacebook =faHome;

  constructor() { }

  ngOnInit(): void {
  }

}
