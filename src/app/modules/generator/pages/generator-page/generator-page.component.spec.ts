import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeneratorPageComponent } from './generator-page.component';

describe('GeneratorPageComponent', () => {
  let component: GeneratorPageComponent;
  let fixture: ComponentFixture<GeneratorPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
