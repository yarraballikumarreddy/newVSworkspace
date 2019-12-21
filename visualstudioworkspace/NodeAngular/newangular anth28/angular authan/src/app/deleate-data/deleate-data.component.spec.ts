import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DELEATEDATAComponent } from './deleate-data.component';

describe('DELEATEDATAComponent', () => {
  let component: DELEATEDATAComponent;
  let fixture: ComponentFixture<DELEATEDATAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DELEATEDATAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DELEATEDATAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
