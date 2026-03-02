import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
  selector: 'badge-01',
  standalone: true,
  imports: [HlmBadge],
  template: `<span hlmBadge variant="destructive" class="rounded-full"><ng-content /></span>`,
})
export class Badge01Component {}
