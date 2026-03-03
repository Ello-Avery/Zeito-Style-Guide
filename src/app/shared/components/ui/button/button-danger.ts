import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
  selector: 'button-danger',
  imports: [HlmButton],
  template: `
    <button hlmBtn size="lg" class="bg-destructive font-bold uppercase tracking-widest px-6 py-4">
      <ng-content />
    </button>
  `,
})
export class ButtonDangerComponent {}
