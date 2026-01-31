import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main {
  protected readonly navItems = signal([
    { label: 'User', path: '/user' },
    { label: 'Admin', path: '/admin' },
  ]);
}
