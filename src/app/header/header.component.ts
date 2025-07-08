import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements OnInit, OnDestroy {

  scrollToTopCounter: number;
  lastKnownScrollPosition: number;
  private scrollHandler: any;

  constructor() { }

  ngOnInit() {
    this.scrollToTopCounter = 0;
    this.scrollHandler = (event) => {
      this.lastKnownScrollPosition = window.scrollY;
      if (this.lastKnownScrollPosition === 0) {
        this.scrollToTopCounter++;
      }
    };
    window.addEventListener('scroll', this.scrollHandler);
    setTimeout(() => {}, 1000);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
  }


}
