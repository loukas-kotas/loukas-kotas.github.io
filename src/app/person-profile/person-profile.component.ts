import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.scss']
})
export class PersonProfileComponent implements OnInit {

  showScrollDownButton = false;
  dataText = ['Loukas Kotas', 'Web Developer', 'Javascript Engineer'];

  constructor() { }

  ngOnInit() {
    this.coverFullScreen();
    this.typewriter();
    this.activateScrollDownButton();
    document.addEventListener('DOMContentLoaded', this.typewriter);
  }

  coverFullScreen() {
    const el = document.getElementById('container');
    el.style.setProperty('--custom-height', String(window.innerHeight));

  }

  activateScrollDownButton() {
    setTimeout(() => {
      this.showScrollDownButton = true;
    }, 7000);
  }

  typewriter = (): void => {
    this.startTextAnimation(1);
    setTimeout(() => {
      this.startTextAnimation(2);
    }, 3000);
    setTimeout(() => {
      this.startTextAnimation(0);
    }, 6000);
  }

  typeWriter(text, i, callback) {
    if ( i < text.length ) {
      document.querySelector('h1').innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true" class="blinking-cursor"></span';
      setTimeout(() => {
        this.typeWriter(text, i + 1, callback);
      }, (100));
    } else if ( typeof callback == 'function') {
      setTimeout(callback, 700);
    }
  }


  startTextAnimation(i) {
    if (typeof this.dataText[i] === 'undefined') {
        setTimeout(function() {
          this.StartTextAnimation(0);
        }, 20000);
    }
    // check if dataText[i] exists
    if (i < this.dataText[i].length) {
      // text exists! start typewriter animation
    this.typeWriter(this.dataText[i], 0, () => { });
    }

    if (i < this.dataText[i].length) {
      // text exists! start typewriter animation
     this.typeWriter(this.dataText[i], 0, () => { });
    }

  }

}
