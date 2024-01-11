import { Component, OnDestroy, OnInit } from '@angular/core';

import {MediaObserver,MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'vp-app11';



  constructor(public  mediaObserver: MediaObserver) {

  }

  private mediaSubscription ?: Subscription;
  private activeMediaQuery = '';

  ngOnInit(): void {
    
    this.mediaSubscription = this.mediaObserver.asObservable().subscribe((change :MediaChange[])=> {

      change.forEach((item) => {
        console.log(item.mqAlias);
        this.activeMediaQuery = item
          ? `'${item.mqAlias}' = (${item.mediaQuery})`
          : '';
        if (item.mqAlias === 'xs') {
          this.loadMobileContent();
          
        }
        
      console.log('activeMediaQuery', this.activeMediaQuery);
      });


    })

  }

  ngOnDestroy(): void {
    this.mediaSubscription?.unsubscribe();
  }

  loadMobileContent() {
    // Do something special since the viewport is currently
    // using mobile display sizes.
  }

}
