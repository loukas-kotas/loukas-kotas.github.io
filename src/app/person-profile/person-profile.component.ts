import { Component } from '@angular/core';
import * as config from './../../configuration';
@Component({
    selector: 'app-person-profile',
    templateUrl: './person-profile.component.html',
    styleUrls: ['./person-profile.component.scss'],
    standalone: false
})
export class PersonProfileComponent {

  showScrollDownButton = false;
  dataText = ['Javascript Engineer', 'Web Developer', 'Loukas Kotas' ];
  blackBoxHeight = 500; // default value
  headerHeight = 100; //TODO: get that from configuration
  isScrollDownVisible = config.isScrollDownVisible;

  constructor() { }

  onTypewritingCompleted(): void {
    this.showScrollDownButton = true;
  }

}
