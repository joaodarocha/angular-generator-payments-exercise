import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { NumbersService } from './numbers.service';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private readonly LETTER_A_ASCII_CODE: number = 97;
  private readonly LETTER_Z_ASCII_CODE: number = 122;
  private grid: string[][];

  private numberOfPriorityCharacters = 20;
  private priorityCharacter: string;

  constructor() {
    this._grid$.next(this.getStartingGrid()); // start the grid
  }

  private _grid$: ReplaySubject<string[][]> = new ReplaySubject<string[][]>();

  get grid$(): Observable<string[][]> {
    return this._grid$.asObservable();
  }

  generate(inputChar?: string): void {
    this.grid = this.grid.map(row => {
      return row.map(character => this.generateCharacter(inputChar));
    });
    this.numberOfPriorityCharacters = 20;
    this._grid$.next(this.grid);
  }

  private getStartingGrid(): string[][] {
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
