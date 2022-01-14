import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  sliderAnimationSpeed: any = 5;
  imageObject = [{
    image: 'assets/img/app-landing/mywallet.jpg',
    thumbImage: 'assets/img/app-landing/mywallet.jpg'
}, {
  image: 'assets/img/app-landing/mybanking.jpg',
  thumbImage: 'assets/img/app-landing/mybanking.jpg'
},
{
  image: 'assets/img/app-landing/virtualcards.jpg',
  thumbImage: 'assets/img/app-landing/virtualcards.jpg'
},
{
  image: 'assets/img/app-landing/p2ptransfer.jpg',
  thumbImage: 'assets/img/app-landing/p2ptransfer.jpg'
},
{
  image: 'assets/img/app-landing/billpaymnt.jpg',
  thumbImage: 'assets/img/app-landing/billpaymnt.jpg'
},
{
  image: 'assets/img/app-landing/shop.jpg',
  thumbImage: 'assets/img/app-landing/shop.jpg'
},
{
  image: 'assets/img/app-landing/qrcode.jpg',
  thumbImage: 'assets/img/app-landing/qrcode.jpg'
},];
  constructor() { }

  ngOnInit(): void {
  }
  imageClickHandler(e) {
    console.log('image click', e);
  }
}
