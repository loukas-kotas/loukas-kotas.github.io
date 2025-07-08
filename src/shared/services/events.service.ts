import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  /**
   *
   * @param element
   * @description
   * Detect if an element is in the Viewport.
   * @source https://gist.github.com/jjmu15/8646226
   */
  isInViewport(element) {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    const html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= ( (window.innerHeight || html.clientHeight) + element.clientHeight ) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

}
