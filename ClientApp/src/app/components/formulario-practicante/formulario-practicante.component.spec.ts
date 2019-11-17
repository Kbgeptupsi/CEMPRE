import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPracticanteComponent } from './formulario-practicante.component';

describe('FormularioPracticanteComponent', () => {
  let component: FormularioPracticanteComponent;
  let fixture: ComponentFixture<FormularioPracticanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPracticanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPracticanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
