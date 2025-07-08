import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkTypewriterComponent } from './blink-typewriter.component';

describe('BlinkTypewriterComponent', () => {
  let component: BlinkTypewriterComponent;
  let fixture: ComponentFixture<BlinkTypewriterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlinkTypewriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlinkTypewriterComponent);
    component = fixture.componentInstance;
    component.phrases = ['test'];
    component.options = { startAfter: 0, charInterval: 100, phraseInterval: 1000 } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
