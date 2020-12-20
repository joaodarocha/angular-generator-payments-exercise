import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { NumbersService } from './numbers.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private readonly LETTER_A_ASCII_CODE: number = 97;
  private readonly LETTER_Z_ASCII_CODE: number = 122;
  private grid: string[];

  constructor() {
  }

  private _character: string;

  set character(value: string) {
    this._character = value;
  }

  private _grid$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.getEmptyGrid());

  get grid$(): BehaviorSubject<string[]> {
    return this._grid$;
  }

  initGridStream(inputChar?: string): void {
    this._character = inputChar;
    timer(0, 2000).pipe(map(_ => this.generate())).subscribe();
  }

  countCharacterInGrid(character: string): number {
    return this.countCharInGrid(character);
  }

  private generate(): void {
    this.grid = this.getEmptyGrid();
    const positions = this.get20RandomNumbers();

    for (const position of positions) {
      this.grid[position] = this._character;
    }

    this.grid = this.grid.map(element => {
      return (!element) ? this.getRandomCharacter() : element;
    });

    this._grid$.next(this.grid);
  }

  private countCharInGrid(character: string) {
    return this.grid.reduce((accum, char) => {
        return ( char === character ? accum + 1 : accum );
      }
      , 0);
  }

  private getEmptyGrid(): string[] {
    this.grid = Array(100).fill('');
    return this.grid;
  }

  private getRandomCharacter(): string {
    let character: string;
    const asciiCode: number = NumbersService.getRandomInt(this.LETTER_A_ASCII_CODE, this.LETTER_Z_ASCII_CODE);
    character = String.fromCharCode(asciiCode);
    return character;
  }

  private get20RandomNumbers(): number[] {
    const randomNumbers: number[] = [];

    for (let i = 0; i < 20; i++) {
      const num = ( NumbersService.getRandomInt(0, 99) );

      if (randomNumbers.includes(num)) {
        console.log('Duplicate');
        i--;
      }
      else {
        randomNumbers.push(num);
      }
    }
    return randomNumbers;
  }
}
