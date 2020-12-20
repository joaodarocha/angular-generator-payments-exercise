import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPayment, PaymentsService } from '../../../../core/services/payments.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrls: ['./payments-page.component.scss']
})
export class PaymentsPageComponent implements OnInit, OnDestroy {

  paymentsForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required])
  });

  displayedColumns: string[] = ['name', 'amount', 'code', 'grid'];
  dataSource: MatTableDataSource<IPayment> = new MatTableDataSource();

  private subscriptions: Subscription = new Subscription();

  constructor(
    private paymentsService: PaymentsService
  ) {
  }

  ngOnInit(): void {

    this.subscriptions.add(
      this.paymentsService.payments$.subscribe(payments => {
        console.log('Got new payments: ', payments);
        this.dataSource = new MatTableDataSource<IPayment>(payments);
      })
    );
  }

  addPayment(nameAndAmount: IPayment) {
    if (this.paymentsForm.invalid) {
      return;
    }
    this.paymentsService.createPayment(nameAndAmount);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


}
