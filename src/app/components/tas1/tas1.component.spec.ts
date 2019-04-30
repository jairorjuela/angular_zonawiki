import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tas1Component } from './tas1.component';

describe('Tas1Component', () => {
  let component: Tas1Component;
  let fixture: ComponentFixture<Tas1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tas1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
