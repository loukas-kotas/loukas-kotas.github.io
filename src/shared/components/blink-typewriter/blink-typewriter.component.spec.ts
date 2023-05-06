import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkTypewriterComponent } from './blink-typewriter.component';

describe('BlinkTypewriterComponent', () => {
  let component: BlinkTypewriterComponent;
  let fixture: ComponentFixture<BlinkTypewriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlinkTypewriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlinkTypewriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
