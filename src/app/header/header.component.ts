import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrollToTopCounter: number;
  lastKnownScrollPosition: number;

  constructor() { }

  ngOnInit() {
    this.scrollToTopCounter = 0;
    this.onScroll();
    setTimeout(() => {
    }, 1000);
  }

  onScroll(): void {
    window.addEventListener('scroll', (event) => {
      this.lastKnownScrollPosition = window.scrollY;
      if (this.lastKnownScrollPosition === 0) {
        this.scrollToTopCounter++;
      }
    });
  }


}
