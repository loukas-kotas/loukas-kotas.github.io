import { Component } from '@angular/core';
import { Badge, configData, Skills } from 'src/configuration';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    standalone: false
})
export class SkillsComponent {

  skillsData: Skills = configData.skills;
  badges: Badge[] = configData.badges;

}
