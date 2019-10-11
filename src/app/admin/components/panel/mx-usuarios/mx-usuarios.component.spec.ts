import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxUsuariosComponent } from './mx-usuarios.component';

describe('MxUsuariosComponent', () => {
  let component: MxUsuariosComponent;
  let fixture: ComponentFixture<MxUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
