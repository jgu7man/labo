import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxDeletePopupComponent } from './mx-delete-popup.component';

describe('MxDeletePopupComponent', () => {
  let component: MxDeletePopupComponent;
  let fixture: ComponentFixture<MxDeletePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxDeletePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
