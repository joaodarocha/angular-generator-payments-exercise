import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeService } from '../../../core/services/code.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-live-code',
  templateUrl: './live-code.component.html',
  styleUrls: ['./live-code.component.scss']
})
export class LiveCodeComponent implements OnInit {
  @Input() isPaymentsPage = false;
  code$: Observable<string>;

  constructor(
    private codeService: CodeService,
  ) {
  }

  ngOnInit(): void {
    this.code$ = this.codeService.code$.pipe(tap(code => {
      // console.log('New code: ', code);
    }));
  }

}
