
import { Component,  OnInit ,TemplateRef,ElementRef, ViewChild,ViewEncapsulation} from '@angular/core';
import { trigger, animate, style, transition } from '@angular/animations';
import {NgbModal, ModalDismissReasons} 
      from '@ng-bootstrap/ng-bootstrap';
        import {TranslateService} from '@ngx-translate/core';

      import { I18nServiceService } from '../../../services/i18n-service.service';
@Component({
  selector: 'app-app-merchant',
  templateUrl: './app-merchant.component.html',
  styleUrls: ['./app-merchant.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
  animations: [
    trigger('fadeAnimation', [
      transition('* => fadeIn', [
        animate('2s ease-out', style({ opacity: 1 }))
      ]),
      transition('fadeIn => fadeOut', [
        animate('2s ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppMerchantComponent implements OnInit {
  closeResult = '';
  sliderAnimationSpeed: any = 5;
  imageObject = [{
    image: 'assets/img/sliderlanding/gallery.png',
    thumbImage: 'assets/img/sliderlanding/gallery.png'
},
{
  image: 'assets/img/sliderlanding/gallery.png',
  thumbImage: 'assets/img/sliderlanding/gallery.png'
},
{
  image: 'assets/img/sliderlanding/gallery.png',
  thumbImage: 'assets/img/sliderlanding/gallery.png'
},
];


    triggerState: 'fadeIn' | 'fadeOut' = 'fadeIn';
    triggerState1: 'fadeIn' | 'fadeOut' = 'fadeIn';
    toggle() {
      this.triggerState = this.triggerState === 'fadeIn' ? 'fadeOut' : 'fadeIn';
    }

    toggle1() {
      this.triggerState1 = this.triggerState1 === 'fadeIn' ? 'fadeOut' : 'fadeIn';
    }


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
