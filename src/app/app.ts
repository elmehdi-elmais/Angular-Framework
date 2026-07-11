import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class App {
  protected readonly title = signal('MyApp');
  email: string = "el-mehdi@gmail.com"
}
