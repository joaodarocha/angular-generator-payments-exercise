import { Injectable, OnDestroy } from '@angular/core';
import { GridService } from './grid.service';
import { CodeService } from './code.service';
import { BehaviorSubject, Subscription } from 'rxjs';

export interface IPayment {
  id: number;
  name: string;
  amount: number;
  code: string;
  grid: string[];
  gridLength: number;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentsService implements OnDestroy {
  code: string;
  grid: string[];
  private subscriptions: Subscription = new Subscription();
  private payments: IPayment[] = [];

  constructor(
    private gridService: GridService,
    private codeService: CodeService
  ) {
    this.init();
  }

  private _payments$: BehaviorSubject<IPayment[]> = new BehaviorSubject<IPayment[]>(this.payments);

  get payments$(): BehaviorSubject<IPayment[]> {
    return this._payments$;
  }

  init(): void {
    this.subscriptions.add(
      this.gridService.grid$.subscribe(grid => this.grid = grid)
    );
    this.subscriptions.add(
      this.codeService.code$.subscribe(code => this.code = code)
    );
  }

  createPayment(nameAndAmount: IPayment): IPayment {
    const id: number = this.payments.length + 1;

    const newPayment = {
      id,
      ...nameAndAmount,
      code: this.code,
      grid: this.grid,
      gridLength: this.grid.length
    };

    this.payments.push(newPayment);
    this._payments$.next(this.payments);
    console.log(this.payments);

    return newPayment;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

