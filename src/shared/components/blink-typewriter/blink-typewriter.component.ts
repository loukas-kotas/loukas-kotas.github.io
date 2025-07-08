import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
} from "@angular/core";
import { timer, of, concat, Subscription } from "rxjs";
import { map, tap, concatMap, take, finalize, delay } from 'rxjs/operators';
import { TypewriterOptions } from "src/shared/models/typewriter-options.model";


@Component({
    selector: "app-blink-typewriter",
    templateUrl: "./blink-typewriter.component.html",
    styleUrls: ["./blink-typewriter.component.scss"],
    standalone: false
})
export class BlinkTypewriterComponent implements AfterViewInit, OnDestroy {
  @Input() phrases!: string[];
  @Input() options: TypewriterOptions;
  @Output() typewritingCompleted = new EventEmitter<any>();

  displayedText = "";
  counter = 0;
  private subscription: Subscription;

  constructor() {}

  private typewritePhrase(phrase: string, options: TypewriterOptions): any {
    const {startAfter = 0, charInterval = 100, phraseInterval = 1000} = options; // default values

    const res = timer(startAfter, charInterval)
    .pipe(
      map(i => phrase[i]),
      tap(letter => this.displayedText += letter),
      take(phrase.length),
      delay(phraseInterval),
      finalize(() => { this.triggerWhenPhraseCompletesTypewriting() }),
    )
    return res;
  }

  /**
   * If the phrase is not the last one it clears the typewriter displayed displayedText.
   * It it's the last one then it informs the parent that the typewriter has completed all the phrases.
   * That is useful for example to display the scroll down button
   */
  private triggerWhenPhraseCompletesTypewriting() {
    this.counter++;
    const hasTypewritePrintedAllPhrases = this.counter !== this.phrases.length;
    if (hasTypewritePrintedAllPhrases) { this.displayedText = ''; } else {
      this.typewritingCompleted.emit();
    }
  }

  /**
   *
   * @param phrases
   * @param options
   * Typewrites all the of the phrases of the array. Each phrase will typewrite after the previous one is completed.
   */
  private typeWritePhrases(phrases: string[], options?: TypewriterOptions) {
    let phrases$ = [];

    // create a typewrite observable for each one of the phrases
    for (const phrase of phrases) {
      const typewritedPhrase$ = this.typewritePhrase(phrase, options);
      phrases$.push(typewritedPhrase$);
    }
    this.subscription = concat(...phrases$)
      .pipe(
        concatMap(val => {
          return of(val);
        })
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.typeWritePhrases(this.phrases, this.options);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
