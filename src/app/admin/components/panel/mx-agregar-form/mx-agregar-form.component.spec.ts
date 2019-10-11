import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxAgregarFormComponent } from './mx-agregar-form.component';

describe('MxAgregarFormComponent', () => {
  let component: MxAgregarFormComponent;
  let fixture: ComponentFixture<MxAgregarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxAgregarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxAgregarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
