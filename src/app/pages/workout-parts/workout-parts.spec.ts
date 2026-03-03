import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutParts } from './workout-parts';

describe('WorkoutParts', () => {
  let component: WorkoutParts;
  let fixture: ComponentFixture<WorkoutParts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [WorkoutParts] }).compileComponents();
    fixture = TestBed.createComponent(WorkoutParts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => expect(component).toBeTruthy());
});
