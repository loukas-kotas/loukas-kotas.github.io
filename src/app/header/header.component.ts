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
      this.rotateIcon();
    }, 1000);
  }

  rotateIcon(): void {
    if ( this.scrollToTopCounter > 0 && this.lastKnownScrollPosition === 0) {
      const iconEl = document.getElementById('brand-icon') as HTMLElement;
      iconEl.classList.remove('navbar-brand--animation');
      setTimeout(() => {
        iconEl.classList.add('navbar-brand--animation');
      }, 20);
    }
  }

  onScroll(): void {
    window.addEventListener('scroll', (event) => {
      this.lastKnownScrollPosition = window.scrollY;
      if (this.lastKnownScrollPosition === 0) {
        this.scrollToTopCounter++;
      }
      this.rotateIcon();
    });
  }


}
