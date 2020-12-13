import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-generator-page',
  templateUrl: './generator-page.component.html',
  styleUrls: ['./generator-page.component.scss']
})
export class GeneratorPageComponent implements OnInit {

  row: string[] = Array(10).fill('a').map( (value, index) => index.toString());
  grid: string[][] = Array(10).fill(this.row);
  private inputCharacter: string;

  constructor() { }

  ngOnInit() {
  }

  onNewCharacter(character: string) {
    this.inputCharacter =  character;
  }

  onGeneratorClick() {
    // Generate grid
  }
}
