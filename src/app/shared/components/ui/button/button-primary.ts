import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
  selector: 'button-primary',
  imports: [HlmButton],
  template: `<button hlmBtn size="sm">Primary</button> `,
})
export class ButtonPrimaryComponent {}
