import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-landing-two',
  templateUrl: './agency-landing-two.component.html',
  styleUrls: ['./agency-landing-two.component.scss']
})
export class AgencyLandingTwoComponent implements OnInit {
  imageObject = [{
    image: 'assets/img/app-landing/donbanslide1.jpg',
    thumbImage: 'assets/img/app-landing/donbanslide1.jpg'
}, {
  image: 'assets/img/app-landing/donbanslide2.jpg',
  thumbImage: 'assets/img/app-landing/donbanslide2.jpg'
},
{
  image: 'assets/img/app-landing/3-final.jpg',
  thumbImage: 'assets/img/app-landing/3-final.jpg'
},
{
  image: 'assets/img/app-landing/4-final.jpg',
  thumbImage: 'assets/img/app-landing/4-final.jpg'
}];
  constructor() { }

  ngOnInit(): void {
  }

}
