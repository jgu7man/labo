import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxTableComponent } from './mx-table.component';

describe('MxTableComponent', () => {
  let component: MxTableComponent;
  let fixture: ComponentFixture<MxTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
