import { Component } from '@angular/core';
import { Colors } from '../colors/colors';
import { Spacing } from '../spacing/spacing';
import { Typography } from '../typography/typography';
import { Buttons } from '../buttons/buttons';
import { Pills } from '../pills/pills';
import { Forms } from '../forms/forms';
import { Cards } from '../cards/cards';
import { Badges } from '../badges/badges';
import { Navigation } from '../navigation/navigation';
import { WorkoutParts } from '../workout-parts/workout-parts';
import { CalendarEvents } from '../calendar-events/calendar-events';
import { Avatars } from '../avatars/avatars';
import { Capacity } from '../capacity/capacity';

@Component({
  selector: 'app-home',
  imports: [
    Colors,
    Typography,
    Spacing,
    Buttons,
    Pills,
    Forms,
    Cards,
    Badges,
    Navigation,
    WorkoutParts,
    CalendarEvents,
    Avatars,
    Capacity,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
