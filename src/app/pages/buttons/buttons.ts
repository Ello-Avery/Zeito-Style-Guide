import { Component } from '@angular/core';
import {
  ButtonDangerComponent,
  ButtonDisabledComponent,
  ButtonPrimaryComponent,
} from '../../shared/components/ui';

@Component({
  selector: 'app-buttons',
  imports: [ButtonPrimaryComponent, ButtonDisabledComponent, ButtonDangerComponent],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons {}
