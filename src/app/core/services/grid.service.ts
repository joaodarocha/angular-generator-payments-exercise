import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NumbersService } from './numbers.service';
import { TimeService } from './time.service';

export type Grid = string[][];

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private readonly LETTER_A_ASCII_CODE: number = 97;
  private readonly LETTER_Z_ASCII_CODE: number = 122;
  private grid: Grid;
  private numberOfPriorityCharacters = 20;

  constructor(
    private timeService: TimeService
  ) {
    this._grid$.next(this.getStartingGrid()); // start the grid
  }

  private _grid$: BehaviorSubject<Grid> = new BehaviorSubject<Grid>(this.getStartingGrid());

  getGrid(): BehaviorSubject<Grid> {
    return this._grid$;
  }

  generate(inputChar?: string): void {
    this.grid = this.grid.map(row => {
      return row.map(character => this.generateCharacter(inputChar));
    });
    this.numberOfPriorityCharacters = 20;
    this._grid$.next(this.grid);
  }

  count(character: string): number {
    let count = 0;
    this.grid.forEach(row => {
      count += this.countOcurrencesInArray(row, character);
    });
    return count;
  }

  countOcurrencesInArray(array: string[], character: string) {
    return array.reduce((accum, char) => {
        return ( char === character ? accum + 1 : accum );
      }
      , 0);
  }

  private getStartingGrid(): Grid {
    let row: string[];
    row = Array(10).fill('a');
    this.grid = Array(10).fill(row);
    return this.grid;
  }

  private getRandomCharacter(): string {
    let character: string;
    const asciiCode: number = NumbersService.getRandomInt(this.LETTER_A_ASCII_CODE, this.LETTER_Z_ASCII_CODE);
    character = String.fromCharCode(asciiCode);
    return character;
  }

  private generateCharacter(priorityChar?: string): string {
    if (priorityChar) {
      this.numberOfPriorityCharacters--;
      if (this.numberOfPriorityCharacters > -1) {
        return priorityChar;
      }
    }
    return this.getRandomCharacter();
  }

}
