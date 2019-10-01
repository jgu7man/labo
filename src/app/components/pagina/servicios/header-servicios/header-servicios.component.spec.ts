import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderServiciosComponent } from './header-servicios.component';

describe('HeaderServiciosComponent', () => {
  let component: HeaderServiciosComponent;
  let fixture: ComponentFixture<HeaderServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
