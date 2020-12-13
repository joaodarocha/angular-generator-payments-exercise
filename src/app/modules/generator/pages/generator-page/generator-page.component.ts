import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-generator-page',
  templateUrl: './generator-page.component.html',
  styleUrls: ['./generator-page.component.scss']
})
export class GeneratorPageComponent implements OnInit {

  gridCharacters: string[10][10];

  constructor() { }

  ngOnInit() {
  }

}
