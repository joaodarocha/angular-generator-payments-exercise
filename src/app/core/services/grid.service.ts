import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { NumbersService } from './numbers.service';
import { map } from 'rxjs/operators';

export type Grid = string[][];

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private readonly LETTER_A_ASCII_CODE: number = 97;
  private readonly LETTER_Z_ASCII_CODE: number = 122;
  private grid: Grid;
  private numberOfPriorityCharacters = 20;

  constructor() {
  }

  private _character: string;

  set character(value: string) {
    this._character = value;
  }

  private _grid$: BehaviorSubject<Grid> = new BehaviorSubject<Grid>(this.getEmptyGrid());

  get grid$(): BehaviorSubject<Grid> {
    return this._grid$;
  }

  initGridStream(inputChar?: string): void {
    this._character = inputChar;
    timer(0, 2000).pipe(map(_ => this.generate())).subscribe();
  }

  countCharacterInGrid(character: string): number {
    let count = 0;
    this.grid.forEach(row => {
      count += this.countOcurrencesInArray(row, character);
    });
    return count;
  }

  lengthOfGrid(grid: Grid): number {
    let length = 0;
    grid.forEach(row => {
      row.forEach(column => length++);
    });

    return length;
  }

  private generate(): void {
    this.grid = this.grid.map(row => {
      return row.map(column => this.generateCharacter(this._character));
    });
    this.numberOfPriorityCharacters = 20;
    this._grid$.next(this.grid);
  }

  private countOcurrencesInArray(array: string[], character: string) {
    return array.reduce((accum, char) => {
        return ( char === character ? accum + 1 : accum );
      }
      , 0);
  }

  private getEmptyGrid(): Grid {
    let row: string[];
    row = Array(10).fill('');
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
