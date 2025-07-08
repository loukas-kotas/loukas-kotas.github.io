// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Manually import all spec files:
import './app/app.component.spec';
import './app/about/about.component.spec';
import './app/experience/experience.component.spec';
import './app/header/header.component.spec';
import './app/main/main.component.spec';
import './app/person-profile/person-profile.component.spec';
import './app/skills/skills.component.spec';
import './shared/components/blink-typewriter/blink-typewriter.component.spec';
import './shared/components/donut-chart/donut-chart.component.spec';
import './shared/components/scroll-down-button/scroll-down-button.component.spec';
import './shared/components/skill-budges/skill-budges.component.spec';
import './shared/components/social-media/social-media.component.spec';
import './shared/components/timeline-card/timeline-card.component.spec';
import './shared/services/events.service.spec';
