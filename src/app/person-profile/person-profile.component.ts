import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.scss']
})
export class PersonProfileComponent implements OnInit {

  dataText = ['Loukas Kotas', 'Web Developer', 'Javascript Freak'];

  constructor() { }

  ngOnInit() {
    console.log('ngoninit');
    this.typewriter();
    document.addEventListener('DOMContentLoaded', this.typewriter);
  }

  typewriter = (): void => {
    console.log('typewriter');
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
    if (typeof this.dataText[i] == 'undefined'){
        setTimeout(function() {
          this.StartTextAnimation(0);
        }, 20000);
    }
    // check if dataText[i] exists
    if (i < this.dataText[i].length) {
      // text exists! start typewriter animation
    this.typeWriter(this.dataText[i], 0, function(){
      // after callback (and whole text has been animated), start next text
      this.StartTextAnimation(i + 1);
    });
    }

    if (i < this.dataText[i].length) {
      // text exists! start typewriter animation
     this.typeWriter(this.dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       this.StartTextAnimation(i + 1);
     });
    }

  }

}
