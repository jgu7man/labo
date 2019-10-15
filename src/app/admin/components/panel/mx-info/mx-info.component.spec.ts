import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxInfoComponent } from './mx-info.component';

describe('MxInfoComponent', () => {
  let component: MxInfoComponent;
  let fixture: ComponentFixture<MxInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
