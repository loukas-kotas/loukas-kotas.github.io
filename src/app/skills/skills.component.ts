import { Component, OnInit, OnDestroy } from '@angular/core';
import { Badge, configData, Skills, } from 'src/configuration';
import { EventsService } from 'src/shared/services/events.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    standalone: false
})
export class SkillsComponent implements OnInit, OnDestroy {

  skillsData: Skills = configData.skills;
  badges: Badge[] = configData.badges;

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
