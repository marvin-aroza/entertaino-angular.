import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Main } from '../core/components/main/main';

@Component({
  selector: 'app-root',
  imports: [Main],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
