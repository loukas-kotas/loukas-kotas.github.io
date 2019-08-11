import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonProfileComponent } from './person-profile.component';
import { ScrollDownButtonModule } from 'src/shared/components/scroll-down-button/scroll-down-button.module';

describe('PersonProfileComponent', () => {
  let component: PersonProfileComponent;
  let fixture: ComponentFixture<PersonProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ScrollDownButtonModule
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
