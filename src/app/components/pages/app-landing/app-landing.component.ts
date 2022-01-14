import { Component, OnInit ,TemplateRef,ElementRef, ViewChild,ViewEncapsulation} from '@angular/core';

import {NgbModal, ModalDismissReasons} 
      from '@ng-bootstrap/ng-bootstrap';
        import {TranslateService} from '@ngx-translate/core';

      import { I18nServiceService } from '../../../services/i18n-service.service';

@Component({
  selector: 'app-app-landing',
  templateUrl: './app-landing.component.html',
  styleUrls: ['./app-landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppLandingComponent implements OnInit {
  closeResult = '';
  sliderAnimationSpeed: any = 5;
  imageObject = [{
    image: 'assets/img/sliderlanding/Slider 1.jpg',
    thumbImage: 'assets/img/sliderlanding/Slider 1.jpg',
    id: "slide1"
}, {
  image: 'assets/img/sliderlanding/Slider 2.jpg',
  thumbImage: 'assets/img/sliderlanding/Slider 2.jpg'
},
{
  image: 'assets/img/sliderlanding/Slider 3.jpg',
  thumbImage: 'assets/img/sliderlanding/Slider 3.jpg'
},
{
  image: 'assets/img/sliderlanding/Slider 4.jpg',
  thumbImage: 'assets/img/sliderlanding/Slider 4.jpg'
},
{
  image: 'assets/img/sliderlanding/Slider 5.jpg',
  thumbImage: 'assets/img/sliderlanding/Slider 5.jpg'
},
{
  image: 'assets/img/sliderlanding/Slider 7.jpg',
  thumbImage: 'assets/img/sliderlanding/Slider 7.jpg'
},
{
  image: 'assets/img/sliderlanding/Slider 6.jpg',
  thumbImage: 'assets/img/sliderlanding/Slider 6.jpg'
},];

  ngOnInit(): void {
    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale));
  }
  imageClickHandler(e) {
    console.log('image click', e);
  }

  constructor(private modalService: NgbModal, private translate: TranslateService,
    private i18nService: I18nServiceService,
     private el: ElementRef) {
      translate.setDefaultLang('en');

}
useLanguage(language: string) {
  this.i18nService.changeLocale(language); 
  this.translate.use(language);
}


  open(content) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

