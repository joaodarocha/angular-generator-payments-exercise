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

  private getTimeString(): string {
    const now: Date = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return `${hours}h${minutes}m${seconds}s`;
  }

}
