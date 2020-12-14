import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimeService } from '../../../core/services/time.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-live-code',
  templateUrl: './live-code.component.html',
  styleUrls: ['./live-code.component.scss']
})
export class LiveCodeComponent implements OnInit, OnDestroy{
  time$: Observable<string> = new Observable<string>();
  code: number;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private timeService: TimeService
  ) {
  }

  ngOnInit(): void {
    this.code = 11;
    this.time$ = this.timeService.getTime();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
