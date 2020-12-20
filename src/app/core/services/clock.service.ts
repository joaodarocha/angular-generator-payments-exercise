import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  private _time$: Observable<string> = interval(1000) // Emits every second
    .pipe(
      map(tick => this.getClock(),
        shareReplay(1)
      ));

  get time$(): Observable<string> {
    return this._time$;
  }

  getSeconds(): number[] {
    const now = this.getNowDate();
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Always have 2 digits
    const firstDigit: number = Number(seconds.substr(0, 1));
    const secondDigit: number = Number(seconds.substr(1, 1));

    return [firstDigit, secondDigit];
  }

  private getClock(): string {
    const now = this.getNowDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${hours}h${minutes}m${seconds}s`;
  }

  private getNowDate(): Date {
    return new Date();
  }

}
