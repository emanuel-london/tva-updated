import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBandComponent } from './select-band.component';

describe('SelectBandComponent', () => {
  let component: SelectBandComponent;
  let fixture: ComponentFixture<SelectBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
