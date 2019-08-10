import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-scroll-down-button',
  templateUrl: './scroll-down-button.component.html',
  styleUrls: ['./scroll-down-button.component.scss']
})
export class ScrollDownButtonComponent implements OnInit, OnChanges {

  @Input() show: boolean;
  lastKnownScrollPosition: number;
  yScrollThreshold = 50;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.onScroll();
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
