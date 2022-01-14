import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SassLandingOneComponent } from './components/pages/sass-landing-one/sass-landing-one.component';
import { AppLandingComponent } from './components/pages/app-landing/app-landing.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { GatewayServicesComponent } from './components/pages/gateway-services/gateway-services.component';
import { ProcessingComponent } from './components/pages/processing/processing.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/pages/privacypolicy/privacypolicy.component';
import { TermsofUseComponent } from './components/pages/termsofuse/termsofuse.component';
import { AgentComponent } from './components/pages/agent/agent.component';
import { QrcodeComponent } from './components/pages/qrcode/qrcode.component';


import { SassLandingTwoComponent } from './components/pages/sass-landing-two/sass-landing-two.component';
import { AgencyLandingOneComponent } from './components/pages/agency-landing-one/agency-landing-one.component';
import { AgencyLandingTwoComponent } from './components/pages/agency-landing-two/agency-landing-two.component';
import { PortfolioLandingComponent } from './components/pages/portfolio-landing/portfolio-landing.component';

import { AppMerchantComponent } from './components/pages/app-merchant/app-merchant.component';
import { BusinessComponent } from './components/pages/business/business.component';

const routes: Routes = [
	
    {path: '', component: AppLandingComponent},
    {path: 'sass-landing-two', component: SassLandingTwoComponent},
    {path: 'app-landing', component: AppLandingComponent},
	 {path: 'about-us', component: AboutUsComponent},
	  {path: 'gateway-services', component: GatewayServicesComponent},
	 {path: 'processing', component: ProcessingComponent},
	 {path: 'contact-us', component: ContactUsComponent},
	 {path: 'privacypolicy', component: PrivacyPolicyComponent},
	 {path: 'termsofuse', component: TermsofUseComponent},
	  {path: 'agent', component: AgentComponent},
	    {path: 'business', component: BusinessComponent},
	    {path: 'qrcode', component: QrcodeComponent},
    {path: 'agency-landing-one', component: AgencyLandingOneComponent},
    {path: 'agency-landing-two', component: AgencyLandingTwoComponent},
    {path: 'portfolio-landing', component: PortfolioLandingComponent},
	   {path: 'app-merchant', component: AppMerchantComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }