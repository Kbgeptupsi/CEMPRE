import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsstatusComponent } from './csstatus.component';

describe('CsstatusComponent', () => {
  let component: CsstatusComponent;
  let fixture: ComponentFixture<CsstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
