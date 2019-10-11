import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxDashboardComponent } from './mx-dashboard.component';

describe('MxDashboardComponent', () => {
  let component: MxDashboardComponent;
  let fixture: ComponentFixture<MxDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
