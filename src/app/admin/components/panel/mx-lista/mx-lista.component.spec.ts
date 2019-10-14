import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxListaComponent } from './mx-lista.component';

describe('MxListaComponent', () => {
  let component: MxListaComponent;
  let fixture: ComponentFixture<MxListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
