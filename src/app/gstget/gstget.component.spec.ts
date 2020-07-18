import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstgetComponent } from './gstget.component';

describe('GstgetComponent', () => {
  let component: GstgetComponent;
  let fixture: ComponentFixture<GstgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
