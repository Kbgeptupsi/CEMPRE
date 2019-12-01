import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrrecordComponent } from './crrecord.component';

describe('CrrecordComponent', () => {
  let component: CrrecordComponent;
  let fixture: ComponentFixture<CrrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
