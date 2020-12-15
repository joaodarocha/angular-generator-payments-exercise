import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimeService } from '../../../core/services/time.service';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { Grid, GridService } from '../../../core/services/grid.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-live-code',
  templateUrl: './live-code.component.html',
  styleUrls: ['./live-code.component.scss']
})
export class LiveCodeComponent implements OnInit, OnDestroy {
  time$: Observable<string> = new Observable<string>();
  code$: Observable<string>;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private timeService: TimeService,
    private gridService: GridService
  ) {
  }

  ngOnInit(): void {
    this.time$ = this.timeService.getTime();
    this.code$ = this.getCode();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  getCode(): Observable<string> {
    const timeObservable = this.timeService.getTime().pipe(
      filter(time => this.timeService.getSecondsFromDateString(time)[1] % 2 === 0)
    );
    const gridObservable = this.gridService.getGrid();

    return combineLatest([timeObservable, gridObservable]
    ).pipe(
      map(([time, grid]: [string, Grid]) => {
        return this.generateCode(time, grid);
      })
    );
  }

  generateCode(time: string, grid: Grid): string {
    const seconds: number[] = this.timeService.getSecondsFromDateString(time);

    const characters: string[] = this.getCharactersFromGrid(seconds, grid);

    return this.generateDigitsFromCharacters(characters);
  }

  private getCharactersFromGrid(seconds: number[], grid: Grid): string[] {
    const leftSecond = seconds[0];
    const rightSecond = seconds[1];
    const firstChar = grid[leftSecond][rightSecond];
    const secondChar = grid[rightSecond][leftSecond];

    return [firstChar, secondChar];
  }

  private generateDigitsFromCharacters(characters: string[]) {
    const firstDigit = this.getCharCount(characters[0]);
    const secondDigit = this.getCharCount(characters[1]);

    return firstDigit + '' + secondDigit;
  }

  private getCharCount(character: string) {
    const count = this.gridService.count(character);

    return this.normalizeDigits(count);
  }

  private normalizeDigits(count: number) {
    const divisor = Math.ceil(( count / 9 ));

    return Math.ceil(count / divisor);

  }
}
