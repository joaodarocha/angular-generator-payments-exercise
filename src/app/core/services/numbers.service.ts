import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  static getRandomInt(min: number, max: number): number {
    max = max + 1; // Without this, max is excluded
    return Math.floor(Math.random() * ( max - min ) + min);
  }
}
