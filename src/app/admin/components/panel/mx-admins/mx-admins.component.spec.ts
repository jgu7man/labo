import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxAdminsComponent } from './mx-admins.component';

describe('MxAdminsComponent', () => {
  let component: MxAdminsComponent;
  let fixture: ComponentFixture<MxAdminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxAdminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
