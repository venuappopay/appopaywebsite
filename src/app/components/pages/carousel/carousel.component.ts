import { Component, OnInit, Output } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  slides = [{
      image: 'assets/img/carousel/latest/MyWallet0412.png',
      img_top: 'assets/img/carousel/banner1/separator1.png',
      img_bottom: 'assets/img/carousel/banner1/mobile-1-info.png',
      top_text: "Send money directly to <br> Family and Friends.",
      bottom_text: "",
      img_top_animation: 'flip delay-2s',
      img_bottom_animation: 'rotateInUpLeft',
      top_text_animation: '',
      bottom_text_animation: '',
      id: "slide1"
    },
    {
      image: 'assets/img/carousel/latest/card0412.png',
      img_top: 'assets/img/carousel/banner2/separator2.png',
      img_bottom: 'assets/img/carousel/banner2/mobile-2-info.png',
      top_text: "Send money directly to <br> Family and Friends.",
      bottom_text: "",
      img_top_animation: 'fadeInDown',
      img_bottom_animation: 'rotateInUpRight',
      top_text_animation: '',
      bottom_text_animation: '',
      id: "slide2"
    },
    {
      image: 'assets/img/carousel/latest/VirtualPrepaid0412.png',
      img_top: 'assets/img/carousel/banner3/virtual0412.png',
      img_bottom: 'assets/img/carousel/banner3/mobile-3-info.png',
      top_text: "",
      bottom_text: "Get Virtual UnionPay <br> Prepaid Card When you install the",
      img_top_animation: 'rotateIn',
      img_bottom_animation: 'rotateInUpLeft',
      top_text_animation: '',
      bottom_text_animation: 'flip',
      id: "slide3"
    },
    {
      image: 'assets/img/carousel/latest/p2platest.png',
      img_top: 'assets/img/carousel/banner4/separator4.png',
      img_bottom: 'assets/img/carousel/banner4/mobile-4-info.png',
      top_text: "Send money directly to <br> Family and Friends.",
      bottom_text: "No bank account, No problem.<br>Pickup or Send at any APPO pay<br>agent location.",
      img_top_animation: 'flip',
      img_bottom_animation: 'fadeInDown',
      top_text_animation: '',
      bottom_text_animation: 'rotateInUpRight',
      id: "slide4"
    },
    {
      image: 'assets/img/carousel/latest/billlatest.png',
      img_top: 'assets/img/carousel/banner5/separator5.png',
      img_bottom: 'assets/img/carousel/banner5/mobile-5-info.png',
      top_text: "",
      bottom_text: "",
      img_top_animation: 'rotateInUpLeft',
      img_bottom_animation: 'flip',
      top_text_animation: '',
      bottom_text_animation: '',
      id: "slide5"
    },
    {
      image: 'assets/img/carousel/latest/slide6.png',
      img_top: 'assets/img/carousel/banner6/separator6.png',
      img_bottom: 'assets/img/carousel/banner6/mobile-6-info.png',
      top_text: "",
      bottom_text: "",
      img_top_animation: 'rotateInUpRight',
      img_bottom_animation: 'fadeInDown',
      top_text_animation: '',
      bottom_text_animation: '',
      id: "slide6"
    },
    {
      image: 'assets/img/carousel/latest/Shoppingyellow.png',
      img_top: 'assets/img/carousel/banner7/myshoppingiconyellow.png',
      img_bottom: 'assets/img/carousel/banner7/mobile-7-info.png',
      top_text: "",
      bottom_text: "",
      img_top_animation: 'fadeInTopLeft',
      img_bottom_animation: 'rotateInUpRight',
      top_text_animation: '',
      bottom_text_animation: '',
      id: "slide7"
    }
  ];
  currentSlide: Number = 1;
  img_top: string = '';
  img_bottom: string = '';
  top_text: string = "";
  bottom_text: string = "";
  img_top_animation: string = "";
  img_bottom_animation: string = '';
  top_text_animation: string = '';
  bottom_text_animation: string = '';
  slide_id: string = "slide1";

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.pauseOnFocus = false;
  }

  ngOnInit(): void {
    this.img_top_animation = this.slides[0].img_top_animation;
    this.img_bottom_animation = this.slides[0].img_bottom_animation;
    this.top_text_animation = this.slides[0].top_text_animation;
    this.bottom_text_animation = this.slides[0].bottom_text_animation;
    this.img_top = this.slides[0].img_top;
    this.img_bottom = this.slides[0].img_bottom;
    this.bottom_text = this.slides[0].bottom_text;
    this.top_text = this.slides[0].top_text;
    this.slide_id = this.slides[0].id;
  }

  manageClickHandler(e, i) {
    if (e.isShown && window.innerWidth >= 576) {
      this.currentSlide = i;
    }
    if (this.slides.length == this.currentSlide) {
      this.currentSlide = 0;
    }
    let index: any = this.currentSlide;
    this.img_top_animation = this.slides[index].img_top_animation;
    this.img_top = this.slides[index].img_top;
    this.img_bottom_animation = this.slides[index].img_bottom_animation;
    this.img_bottom = this.slides[index].img_bottom;
    this.top_text_animation = this.slides[index].top_text_animation;
    this.top_text = this.slides[index].top_text;
    this.bottom_text_animation = this.slides[index].bottom_text_animation;
    this.bottom_text = this.slides[index].bottom_text;
    this.slide_id = this.slides[index].id;
  }


  manageClickHandlerMobile(e, i) {
    if (e.isShown && window.innerWidth < 576) {
      this.currentSlide = i;
    }
    if (this.slides.length == this.currentSlide) {
      this.currentSlide = 0;
    }
    let index: any = this.currentSlide;
    this.img_top_animation = this.slides[index].img_top_animation;
    this.img_top = this.slides[index].img_top;
    this.img_bottom_animation = this.slides[index].img_bottom_animation;
    this.img_bottom = this.slides[index].img_bottom;
    this.top_text_animation = this.slides[index].top_text_animation;
    this.top_text = this.slides[index].top_text;
    this.bottom_text_animation = this.slides[index].bottom_text_animation;
    this.bottom_text = this.slides[index].bottom_text;
    this.slide_id = this.slides[index].id;
  }

  scrollTo(element_id) {
    console.log(element_id);
    document.getElementById(element_id).scrollIntoView();
  }
}
