import { Component, OnInit, OnDestroy } from '@angular/core';
import { type Container, type ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
import { NgParticlesService } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import * as config from './../../configuration';

@Component({
    selector: 'app-person-profile',
    templateUrl: './person-profile.component.html',
    styleUrls: ['./person-profile.component.scss'],
    standalone: false
})
export class PersonProfileComponent implements OnInit, OnDestroy {

  showScrollDownButton = false;
  dataText = ['Senior Software Engineer', 'Turning Ideas Into Products', 'Loukas Kotas'];
  blackBoxHeight = 500;
  headerHeight = 100;
  isScrollDownVisible = config.isScrollDownVisible;

  id = 'hero-particles';
  particlesOptions: ISourceOptions;
  showParticles = true;

  private particlesContainer: Container | undefined;
  private themeObserver: MutationObserver | undefined;

  constructor(private readonly ngParticlesService: NgParticlesService) {
    this.particlesOptions = this.buildParticlesConfig(this.isDarkMode());
  }

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      await loadSlim(engine);
    });

    // Watch for theme changes on <html data-theme="...">
    this.themeObserver = new MutationObserver(() => {
      // Rebuild config for new theme and force re-render
      this.showParticles = false;
      this.particlesOptions = this.buildParticlesConfig(this.isDarkMode());
      setTimeout(() => (this.showParticles = true), 50);
    });

    this.themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
  }

  ngOnDestroy(): void {
    this.themeObserver?.disconnect();
  }

  particlesLoaded(container: Container): void {
    this.particlesContainer = container;
  }

  onTypewritingCompleted(): void {
    this.showScrollDownButton = true;
  }

  private isDarkMode(): boolean {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  private buildParticlesConfig(dark: boolean): ISourceOptions {
    return {
      fpsLimit: 60,
      fullScreen: { enable: false },
      detectRetina: true,
      particles: {
        color: {
          value: dark
            ? ['#f97066', '#fb8872', '#e8e8ed']   // coral + light for dark bg
            : ['#1a1a2e', '#374151', '#ef4444'],   // navy + dark gray + red for light bg
        },
        links: {
          color: dark ? '#f97066' : '#374151',
          distance: 160,
          enable: true,
          opacity: dark ? 0.4 : 0.35,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: true,
          speed: 0.6,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 60,
        },
        opacity: {
          value: dark
            ? { min: 0.3, max: 0.7 }
            : { min: 0.35, max: 0.7 },
          animation: {
            enable: true,
            speed: 0.8,
            sync: false,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1.5, max: 4 },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: dark ? 0.5 : 0.5,
            },
          },
        },
      },
    };
  }
}
