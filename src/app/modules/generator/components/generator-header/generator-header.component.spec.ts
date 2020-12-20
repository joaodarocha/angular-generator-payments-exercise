import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorHeaderComponent } from './generator-header.component';

describe('GeneratorHeaderComponent', () => {
  let component: GeneratorHeaderComponent;
  let fixture: ComponentFixture<GeneratorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
