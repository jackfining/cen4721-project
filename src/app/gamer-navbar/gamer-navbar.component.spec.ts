import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerNavbarComponent } from './gamer-navbar.component';

describe('GamerNavbarComponent', () => {
  let component: GamerNavbarComponent;
  let fixture: ComponentFixture<GamerNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
