import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrstatusComponent } from './crstatus.component';

describe('CrstatusComponent', () => {
  let component: CrstatusComponent;
  let fixture: ComponentFixture<CrstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
