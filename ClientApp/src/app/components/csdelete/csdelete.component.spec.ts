import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsdeleteComponent } from './csdelete.component';

describe('CsdeleteComponent', () => {
  let component: CsdeleteComponent;
  let fixture: ComponentFixture<CsdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
