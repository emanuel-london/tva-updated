import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverTrekContentsComponent } from './river-trek-contents.component';

describe('RiverTrekContentsComponent', () => {
  let component: RiverTrekContentsComponent;
  let fixture: ComponentFixture<RiverTrekContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiverTrekContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverTrekContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
