import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarVagaComponent } from './criar-vaga.component';

describe('CriarVagaComponent', () => {
  let component: CriarVagaComponent;
  let fixture: ComponentFixture<CriarVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarVagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
