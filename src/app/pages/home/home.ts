import { Component } from '@angular/core';
import { Colors } from '../colors/colors';
import { Typography } from '../typography/typography';

@Component({
  selector: 'app-home',
  imports: [Colors, Typography],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
