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
  isScrolled = false;
  activeSection = '';
  isDarkMode = true;
  mobileMenuOpen = false;

  private scrollHandler: any;
  private sections = ['about', 'skills', 'experience'];

  constructor() { }

  ngOnInit() {
    this.scrollToTopCounter = 0;

    // Initialize dark mode state
    this.isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';

    this.scrollHandler = () => {
      this.lastKnownScrollPosition = window.scrollY;

      if (this.lastKnownScrollPosition === 0) {
        this.scrollToTopCounter++;
      }

      // Track scroll state for header shadow
      this.isScrolled = this.lastKnownScrollPosition > 10;

      // Detect active section
      this.detectActiveSection();
    };

    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  private detectActiveSection(): void {
    const headerOffset = 120; // header height + buffer

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerOffset) {
          this.activeSection = this.sections[i];
          return;
        }
      }
    }

    this.activeSection = '';
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : '');
    localStorage.setItem('theme', theme);

    // Update favicon based on theme with cache busting
    const favicon = document.getElementById('dynamic-favicon');
    if (favicon instanceof HTMLLinkElement) {
      const newFavicon = this.isDarkMode ? 'favicon-dark.ico' : 'favicon.ico';
      const timestamp = new Date().getTime();
      const newHref = newFavicon + '?' + timestamp;
      
      // Log for debugging
      console.log('[Theme Toggle] Setting favicon:', newHref);
      console.log('[Theme Toggle] favicon element:', favicon);
      console.log('[Theme Toggle] favicon.href (before):', favicon.href);
      
      favicon.href = newHref;
      
      console.log('[Theme Toggle] favicon.href (after):', favicon.href);
      
      // Force favicon reload by re-creating the link element
      const parent = favicon.parentNode;
      const nextSibling = favicon.nextSibling;
      const newLink = document.createElement('link');
      newLink.id = 'dynamic-favicon';
      newLink.rel = 'icon';
      newLink.type = 'image/x-icon';
      newLink.href = newHref;
      if (parent) {
        parent.removeChild(favicon);
        parent.insertBefore(newLink, nextSibling);
      }
      
      console.log('[Theme Toggle] New favicon element created, href:', newLink.href);
    } else {
      console.warn('Favicon element not found or not a link element');
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
