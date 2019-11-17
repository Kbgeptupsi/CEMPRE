import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticantesGuiaComponent } from './practicantes-guia.component';

describe('PracticantesGuiaComponent', () => {
  let component: PracticantesGuiaComponent;
  let fixture: ComponentFixture<PracticantesGuiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticantesGuiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticantesGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
