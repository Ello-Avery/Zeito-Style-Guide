import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
  selector: 'button-disabled',
  imports: [HlmButton],
  template: `<button hlmBtn disabled size="sm"><ng-content /> ></button> `,
})
export class ButtonDisabledComponent {}
