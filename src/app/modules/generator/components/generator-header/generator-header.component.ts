import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generator-header',
  templateUrl: './generator-header.component.html',
  styleUrls: ['./generator-header.component.scss']
})
export class GeneratorHeaderComponent implements OnInit {

  @Output() newCharacter: EventEmitter<string> = new EventEmitter<string>();
  @Output() generatorClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
