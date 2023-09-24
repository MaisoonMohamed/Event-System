import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveEventsComponent } from './retrieve-events.component';

describe('RetrieveEventsComponent', () => {
  let component: RetrieveEventsComponent;
  let fixture: ComponentFixture<RetrieveEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieveEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
