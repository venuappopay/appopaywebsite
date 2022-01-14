import { Component,  OnInit ,TemplateRef,ElementRef, ViewChild,ViewEncapsulation } from '@angular/core';

import {NgbModal, ModalDismissReasons} 
      from '@ng-bootstrap/ng-bootstrap';
        import {TranslateService} from '@ngx-translate/core';

      import { I18nServiceService } from '../../../services/i18n-service.service';
@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.scss']
})
export class ProcessingComponent implements OnInit {
 closeResult = '';
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
 ngOnInit(): void {
    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale));
  }
  imageClickHandler(e) {
    console.log('image click', e);
  }

  constructor( private translate: TranslateService,
    private i18nService: I18nServiceService,
     private el: ElementRef) {
      translate.setDefaultLang('en');

}
useLanguage(language: string) {
  this.i18nService.changeLocale(language); 
  this.translate.use(language);
}
}
