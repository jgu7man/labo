import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoContactanosComponent } from './contenido-contactanos.component';

describe('ContenidoContactanosComponent', () => {
  let component: ContenidoContactanosComponent;
  let fixture: ComponentFixture<ContenidoContactanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoContactanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
