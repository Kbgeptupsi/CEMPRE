import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpselectionComponent } from './cpselection.component';

describe('CpselectionComponent', () => {
  let component: CpselectionComponent;
  let fixture: ComponentFixture<CpselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
