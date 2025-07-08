import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-scroll-down-button',
    templateUrl: './scroll-down-button.component.html',
    styleUrls: ['./scroll-down-button.component.scss'],
    standalone: false
})
export class ScrollDownButtonComponent implements OnInit, OnChanges, OnDestroy {

  @Input() show: boolean;
  lastKnownScrollPosition: number;
  yScrollThreshold = 50;
  private scrollHandler: any;
  private listenerAdded = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (!this.listenerAdded) {
      this.scrollHandler = (event) => {
        this.hideScrollButton();
      };
      window.addEventListener('scroll', this.scrollHandler);
      this.listenerAdded = true;
    }
  }

  ngOnDestroy() {
    if (this.listenerAdded) {
      window.removeEventListener('scroll', this.scrollHandler);
      this.listenerAdded = false;
    }
  }

  onScroll(): void {
    window.addEventListener('scroll', (event) => {
      this.hideScrollButton();
    });
  }

  hideScrollButton(): void {
    this.lastKnownScrollPosition = window.scrollY;
    if ( this.lastKnownScrollPosition > this.yScrollThreshold ) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

}
