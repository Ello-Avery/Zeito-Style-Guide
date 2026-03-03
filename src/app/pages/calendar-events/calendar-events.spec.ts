import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarEvents } from './calendar-events';

describe('CalendarEvents', () => {
  let component: CalendarEvents;
  let fixture: ComponentFixture<CalendarEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [CalendarEvents] }).compileComponents();
    fixture = TestBed.createComponent(CalendarEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => expect(component).toBeTruthy());
});
