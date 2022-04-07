import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultSelectAreaComponent } from './mult-select-area.component';

describe('MultSelectAreaComponent', () => {
  let component: MultSelectAreaComponent;
  let fixture: ComponentFixture<MultSelectAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultSelectAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultSelectAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
