import { TestBed } from '@angular/core/testing';

import { EventsService } from './events.service';

describe('EventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsService = TestBed.inject(EventsService);
    expect(service).toBeTruthy();
  });

  it('should return false if element is null', () => {
    const service: EventsService = TestBed.inject(EventsService);
    expect(service.isInViewport(null)).toBeFalse();
  });

  it('should return false if element is undefined', () => {
    const service: EventsService = TestBed.inject(EventsService);
    expect(service.isInViewport(undefined)).toBeFalse();
  });

  it('should return true for element in viewport', () => {
    const service: EventsService = TestBed.inject(EventsService);
    const el = document.createElement('div');
    document.body.appendChild(el);
    spyOn(el, 'getBoundingClientRect').and.returnValue({
      top: 0, left: 0, bottom: 10, right: 10, width: 10, height: 10,
      x: 0, y: 0, toJSON: () => ({})
    } as DOMRect);
    spyOnProperty(window, 'innerHeight').and.returnValue(100);
    spyOnProperty(window, 'innerWidth').and.returnValue(100);
    expect(service.isInViewport(el)).toBeTrue();
    document.body.removeChild(el);
  });
});
