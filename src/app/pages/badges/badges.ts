import { Component } from '@angular/core';
import { BadgeUIComponent } from '../../shared/components/ui';

@Component({
  selector: 'app-badges',
  imports: [BadgeUIComponent],
  templateUrl: './badges.html',
  styleUrl: './badges.css',
})
export class Badges {}
