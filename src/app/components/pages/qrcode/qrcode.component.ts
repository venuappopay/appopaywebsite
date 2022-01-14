import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
declare let $: any;

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
  providers: [
    Location, {
        provide: LocationStrategy,
        useClass: PathLocationStrategy
    }
]
})
export class QrcodeComponent implements OnInit {
  location: any;
  routerSubscription: any;

  constructor(private router: Router) {
  }


  ngOnInit(): void {
    this.recallJsFuntions();
  }


recallJsFuntions() {
    this.router.events
    .subscribe((event) => {
        if ( event instanceof NavigationStart ) {
            $('.loader-content').remove();
        }
    });
    this.routerSubscription = this.router.events
    .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
    .subscribe(event => {
        $.getScript('../assets/js/custom.js');
        $('.loader-content').remove();
        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
}

}
