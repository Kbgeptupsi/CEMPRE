import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPracticeerComponent } from './menu-practiceer.component';

describe('MenuPracticeerComponent', () => {
  let component: MenuPracticeerComponent;
  let fixture: ComponentFixture<MenuPracticeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPracticeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPracticeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
