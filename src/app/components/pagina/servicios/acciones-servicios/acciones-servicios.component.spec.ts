import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesServiciosComponent } from './acciones-servicios.component';

describe('AccionesServiciosComponent', () => {
  let component: AccionesServiciosComponent;
  let fixture: ComponentFixture<AccionesServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionesServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionesServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
