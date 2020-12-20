import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClockService } from './clock.service';
import { Grid, GridService } from './grid.service';
import { map, shareReplay, skip } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CodeService {
  // Debugging
  countGrid = 0;

  constructor(
    private clockService: ClockService,
    private gridService: GridService
  ) {
  }

  _code$: Observable<string> = this.initCodeStream();

  get code$(): Observable<string> {
    return this._code$;
  }

  initCodeStream(): Observable<string> {
    const grid$ = this.gridService.grid$;

    return grid$.pipe(
      skip(1), // Only generates a code after grid is initialized
      map(grid => {
        // Debugging
        console.log('New Grid' + this.countGrid++);
        const seconds: number[] = this.clockService.getSeconds();

        return this.generateCode(seconds, grid);
      }),
      shareReplay(1) // Replay the last value to new subscribers
    );
  }

  private generateCode(seconds: number[], grid: Grid): string {
    const characters: string[] = this.getCharactersFromGrid(seconds, grid);

    return this.generateCodeFromCharacters(characters);
  }

  private getCharactersFromGrid(seconds: number[], grid: Grid): string[] {
    const leftSecond = seconds[0];
    const rightSecond = seconds[1];
    const firstChar = grid[leftSecond][rightSecond];
    const secondChar = grid[rightSecond][leftSecond];

    return [firstChar, secondChar];
  }

  private generateCodeFromCharacters(characters: string[]) {
    const firstDigit = this.getCharCount(characters[0]);
    const secondDigit = this.getCharCount(characters[1]);

    return firstDigit + '' + secondDigit;
  }

  private getCharCount(character: string) {
    const count = this.gridService.countCharacterInGrid(character);

    return this.normalizeDigits(count);
  }

  private normalizeDigits(count: number) {
    const divisor = Math.ceil(( count / 9 ));

    return Math.ceil(count / divisor);

  }

}
