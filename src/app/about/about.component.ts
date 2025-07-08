import { Component, OnInit } from '@angular/core';
import { About, configData } from '../../configuration';
@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: false
})
export class AboutComponent implements OnInit {

  about: About = {
    description: configData.about.description,
  };

  constructor() { }

  ngOnInit() {
  }

}
