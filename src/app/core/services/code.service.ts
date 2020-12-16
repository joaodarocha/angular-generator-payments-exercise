import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { TimeService } from './time.service';
import { Grid, GridService } from './grid.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CodeService {
  time$: Observable<string> = new Observable<string>();
  countTime = 0;
  countGrid = 0;

  constructor(
    private timeService: TimeService,
    private gridService: GridService
  ) {
  }

  _code$: Observable<string> = this.initCodeStream();

  get code$(): Observable<string> {
    return this._code$;
  }

  initCodeStream(): Observable<string> {
    const timeObservable = this.timeService.time$;

    const gridObservable = this.gridService.grid$;

    timeObservable.subscribe(time => {
      console.log('Time emiting: ', time);
    });

    gridObservable.subscribe(grid => {
      console.log('New Grid' + this.countGrid++);
    });

    return combineLatest([timeObservable, gridObservable]
    ).pipe(
      map(([time, grid]: [string, Grid]) => {
        // console.log('Generating code.. | time', time, ' | Grid: ', grid.toString());
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
