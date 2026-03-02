import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/core/header/header';
import { Sidebar } from './shared/core/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
