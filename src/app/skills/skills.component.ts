import { Component, OnInit, OnChanges, AfterViewInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';
import { EventsService } from 'src/shared/services/events.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy, OnChanges, AfterViewChecked {

  el: HTMLElement;
  showSkills = false;

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    this.el = document.getElementById('skills-donuts');
    const isInViewport = this.eventsService.isInViewport(this.el);

    if ( isInViewport ) {
      this.showSkills = true;
    }

  };


}
