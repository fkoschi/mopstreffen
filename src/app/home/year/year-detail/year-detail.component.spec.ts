import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearDetailComponent } from './year-detail.component';

describe('YearDetailComponent', () => {
  let component: YearDetailComponent;
  let fixture: ComponentFixture<YearDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
