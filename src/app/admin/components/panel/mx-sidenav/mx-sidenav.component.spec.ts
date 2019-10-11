import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxSidenavComponent } from './mx-sidenav.component';

describe('MxSidenavComponent', () => {
  let component: MxSidenavComponent;
  let fixture: ComponentFixture<MxSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
