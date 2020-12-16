import { Component, OnDestroy, OnInit } from '@angular/core';
import { Grid, GridService } from '../../../../core/services/grid.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-generator-page',
  templateUrl: './generator-page.component.html',
  styleUrls: ['./generator-page.component.scss']
})
export class GeneratorPageComponent implements OnInit, OnDestroy {

  grid: Grid;
  private inputCharacter: string;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private generatorService: GridService
  ) {
  }

  ngOnInit() {
    this.subscriptions.add(
      this.generatorService.grid$.subscribe(grid => {
        this.grid = grid;
      })
    );
  }

  onNewCharacter(character: string) {
    this.inputCharacter = character;
  }

  onGeneratorClick() {
    this.generatorService.generate(this.inputCharacter);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
