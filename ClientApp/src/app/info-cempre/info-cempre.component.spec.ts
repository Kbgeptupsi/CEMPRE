import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCempreComponent } from './info-cempre.component';

describe('InfoCempreComponent', () => {
  let component: InfoCempreComponent;
  let fixture: ComponentFixture<InfoCempreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCempreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCempreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
