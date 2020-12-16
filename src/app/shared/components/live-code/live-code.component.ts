import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeService } from '../../../core/services/code.service';

@Component({
  selector: 'app-live-code',
  templateUrl: './live-code.component.html',
  styleUrls: ['./live-code.component.scss']
})
export class LiveCodeComponent implements OnInit{
  code$: Observable<string>;

  constructor(
    private codeService: CodeService
  ) {
  }

  ngOnInit(): void {
    this.code$ = this.codeService.code$;
  }

}
