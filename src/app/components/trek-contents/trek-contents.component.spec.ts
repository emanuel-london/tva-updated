import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekContentsComponent } from './trek-contents.component';

describe('TrekContentsComponent', () => {
  let component: TrekContentsComponent;
  let fixture: ComponentFixture<TrekContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
