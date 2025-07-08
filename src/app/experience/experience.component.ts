import { Component, OnInit } from '@angular/core';
import { configData, Experience } from 'src/configuration';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    standalone: false
})
export class ExperienceComponent implements OnInit {

  experience: Experience = configData.experience;

  constructor() { }

  ngOnInit() {
  }

}
