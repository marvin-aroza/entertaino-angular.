import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  template: `
    <section class="section" [class.section-accent]="tone() === 'accent'">
      <div class="section-inner">
        <h2>{{ title() }}</h2>
        @if (subtitle()) {
          <p class="subtitle">{{ subtitle() }}</p>
        }
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styleUrl: './section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Section {
  readonly title = input('Section');
  readonly subtitle = input('');
  readonly tone = input<'default' | 'accent'>('default');
}
