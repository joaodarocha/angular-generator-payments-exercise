import { Injectable } from '@angular/core';
import { interval, Observable, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private _time$: Observable<string> = interval(1000) // Emits every second
    .pipe(
      map(tick => this.getTimeAsString(),
        shareReplay(1)
      ));

  get time$(): Observable<string> {
    return this._time$;
  }

  getSecondsFromDateString(date: string): number[] {
    const secondsString = date.slice(-3, -1);
    const firstDigit: number = Number(secondsString.substr(0, 1));
    const secondDigit: number = Number(secondsString.substr(1, 1));

    return [firstDigit, secondDigit];
  }

  private getTimeAsString(): string {
    const now: Date = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${hours}h${minutes}m${seconds}s`;
  }


}
