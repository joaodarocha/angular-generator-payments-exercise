import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-generator-header',
  templateUrl: './generator-header.component.html',
  styleUrls: ['./generator-header.component.scss']
})
export class GeneratorHeaderComponent implements OnInit {

  @Output() newCharacter: EventEmitter<string> = new EventEmitter<string>();
  @Output() generatorClicked: EventEmitter<void> = new EventEmitter<void>();

  characters = new FormControl({value: '', disabled: false} , Validators.pattern('[a-z]'));

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(value: string) {
    if (this.characters.errors) {
      return;
    }
    this.newCharacter.emit(value);
    this.disableInputFor4Seconds();
  }

  private disableInputFor4Seconds() {
    this.characters.disable();
    setTimeout( () => {
      this.characters.enable();
    }, 4000);
  }
}
