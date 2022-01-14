import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { SassLandingOneComponent } from './components/pages/sass-landing-one/sass-landing-one.component';
import { AppLandingComponent } from './components/pages/app-landing/app-landing.component';
import { SassLandingTwoComponent } from './components/pages/sass-landing-two/sass-landing-two.component';
import { AgencyLandingOneComponent } from './components/pages/agency-landing-one/agency-landing-one.component';
import { AgencyLandingTwoComponent } from './components/pages/agency-landing-two/agency-landing-two.component';
import { PortfolioLandingComponent } from './components/pages/portfolio-landing/portfolio-landing.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { GatewayServicesComponent } from './components/pages/gateway-services/gateway-services.component';
import { ProcessingComponent } from './components/pages/processing/processing.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/pages/privacypolicy/privacypolicy.component';
import { TermsofUseComponent } from './components/pages/termsofuse/termsofuse.component';
import { AgentComponent } from './components/pages/agent/agent.component';
import { QrcodeComponent } from './components/pages/qrcode/qrcode.component';
import { AppMerchantComponent } from './components/pages/app-merchant/app-merchant.component';
import { NgImageSliderModule } from "ng-image-slider";
import { CarouselComponent } from './components/pages/carousel/carousel.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BusinessComponent } from './components/pages/business/business.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
  //return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    SassLandingOneComponent,
    AppLandingComponent,
	AboutUsComponent,
	GatewayServicesComponent,
	ProcessingComponent,
	ContactUsComponent,
	AgentComponent,
	BusinessComponent,
	QrcodeComponent,
	PrivacyPolicyComponent,
	TermsofUseComponent,
	AppMerchantComponent,
    SassLandingTwoComponent,
    AgencyLandingOneComponent,
    AgencyLandingTwoComponent,
    PortfolioLandingComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
	IvyCarouselModule,
	    HttpClientModule,

    BrowserAnimationsModule,
  
	    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
	NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
