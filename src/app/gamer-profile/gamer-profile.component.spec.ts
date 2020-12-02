import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerProfileComponent } from './gamer-profile.component';

describe('GamerProfileComponent', () => {
  let component: GamerProfileComponent;
  let fixture: ComponentFixture<GamerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
