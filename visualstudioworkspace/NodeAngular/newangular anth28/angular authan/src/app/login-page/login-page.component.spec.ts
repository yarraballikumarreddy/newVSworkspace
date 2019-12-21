import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LOGINPAGEComponent } from './login-page.component';

describe('LOGINPAGEComponent', () => {
  let component: LOGINPAGEComponent;
  let fixture: ComponentFixture<LOGINPAGEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LOGINPAGEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LOGINPAGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
