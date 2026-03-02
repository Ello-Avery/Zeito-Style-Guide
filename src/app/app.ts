import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonPrimaryComponent, ButtonDisabledComponent } from './shared/components/ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonPrimaryComponent, ButtonDisabledComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  onClick() {
    document.documentElement.classList.toggle('dark');
  }
}
