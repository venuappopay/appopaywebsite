import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  imageObject = [{
    image: 'assets/img/app-landing/Slider 1.jpg',
    thumbImage: 'assets/img/app-landing/Slider 1.jpg',
    title: 'Learn More.'
}, {
  image: 'assets/img/app-landing/virtualbankaccount.jpg',
  thumbImage: 'assets/img/app-landing/virtualbankaccount.jpg',
  title: 'Learn More.'
},
{
  image: 'assets/img/app-landing/virtualcard.jpg',
  thumbImage: 'assets/img/app-landing/virtualcard.jpg',
  title: 'Learn More.'
},
{
  image: 'assets/img/app-landing/p-p-transfer.jpg',
  thumbImage: 'assets/img/app-landing/p-p-transfer.jpg',
  title: 'Learn More.'
},
{
  image: 'assets/img/app-landing/billpayment.jpg',
  thumbImage: 'assets/img/app-landing/billpayment.jpg',
  title: 'Learn More.'
},
{
  image: 'assets/img/app-landing/myshopping.jpg',
  thumbImage: 'assets/img/app-landing/myshopping.jpg',
  title: 'Learn More.'
},
{
  image: 'assets/img/app-landing/emvqrcode.jpg',
  thumbImage: 'assets/img/app-landing/emvqrcode.jpg',
  title: 'Learn More.'
},];
  constructor() { }

  ngOnInit(): void {
  }

}
