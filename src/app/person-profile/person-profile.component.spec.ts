import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonProfileComponent } from './person-profile.component';
import { ScrollDownButtonModule } from 'src/shared/components/scroll-down-button/scroll-down-button.module';
import { BlinkTypewriterModule } from 'src/shared/components/blink-typewriter/blink-typewriter.module';

describe('PersonProfileComponent', () => {
  let component: PersonProfileComponent;
  let fixture: ComponentFixture<PersonProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ScrollDownButtonModule,
        BlinkTypewriterModule
      ],
      declarations: [ PersonProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
