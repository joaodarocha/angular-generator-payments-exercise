import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimeService } from '../../../core/services/time.service';
import { Observable, of, Subscription, zip } from 'rxjs';
import { Grid, GridService } from '../../../core/services/grid.service';
import { map, mergeMap } from 'rxjs/operators';

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
    return this.time$.pipe(
      mergeMap(time => {
        return zip(
          of(time),
          this.gridService.grid$
        ).pipe(
          map(([timeString, grid]: [string, Grid]) => {
              return this.generateCode(timeString, grid);
            }
          )
        );
      })
    );
  }

  generateCode(time: string, grid: Grid): string {
    const seconds: number[] = this.timeService.getSecondsFromDateString(time);
    const leftSecond = seconds[0];
    const rightSecond = seconds[1];
    const firstChar = grid[leftSecond][rightSecond];
    const secondChar = grid[rightSecond][leftSecond];

    console.log(firstChar, secondChar);

    const firstCharCount = this.gridService.count(firstChar);
    const secondCharCount = this.gridService.count(secondChar);

    console.log(firstCharCount, secondCharCount);


    return firstCharCount + '' + secondCharCount;
  }


}
