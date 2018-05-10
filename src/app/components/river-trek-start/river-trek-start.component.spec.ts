import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverTrekStartComponent } from './river-trek-start.component';

describe('RiverTrekStartComponent', () => {
  let component: RiverTrekStartComponent;
  let fixture: ComponentFixture<RiverTrekStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiverTrekStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverTrekStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
