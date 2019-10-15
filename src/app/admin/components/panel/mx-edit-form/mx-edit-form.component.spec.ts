import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxEditFormComponent } from './mx-edit-form.component';

describe('MxEditFormComponent', () => {
  let component: MxEditFormComponent;
  let fixture: ComponentFixture<MxEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
