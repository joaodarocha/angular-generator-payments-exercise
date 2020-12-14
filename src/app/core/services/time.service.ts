import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private time$: Observable<string> = timer(0, 1000)
    .pipe(
      map(tick => this.getTimeString(),
        shareReplay(1)
      ));

  getTime(): Observable<string> {
    return this.time$;
  }

  getSecondsFromDateString(date: string): number[] {
    const secondsString = date.slice(-3, -1);
    const firstDigit: number = Number(secondsString.substr(0, 1));
    const secondDigit: number = Number(secondsString.substr(1, 1));

    return [firstDigit, secondDigit];
  }

  private getTimeString(): string {
    const now: Date = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${hours}h${minutes}m${seconds}s`;
  }


}
