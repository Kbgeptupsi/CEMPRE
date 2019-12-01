import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrdeleteComponent } from './crdelete.component';

describe('CrdeleteComponent', () => {
  let component: CrdeleteComponent;
  let fixture: ComponentFixture<CrdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
