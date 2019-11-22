import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDocentComponent } from './menu-docent.component';

describe('MenuDocentComponent', () => {
  let component: MenuDocentComponent;
  let fixture: ComponentFixture<MenuDocentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDocentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDocentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
