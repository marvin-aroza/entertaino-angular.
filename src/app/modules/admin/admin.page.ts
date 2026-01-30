import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Section } from '../../../core/components/section/section';

@Component({
  selector: 'app-admin-page',
  imports: [Section],
  template: `
    <app-section title="Admin Console" subtitle="Manage the platform overview." tone="accent">
      <div class="grid">
        @for (card of stats(); track card.label) {
          <article class="card">
            <h3>{{ card.label }}</h3>
            <p>{{ card.value }}</p>
          </article>
        }
      </div>
    </app-section>
  `,
  styles: [
    `
      .grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      }

      .card {
        padding: 1rem;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      h3 {
        margin: 0 0 0.35rem;
        font-size: 1rem;
      }

      p {
        margin: 0;
        font-size: 1.2rem;
        font-weight: 600;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPage {
  protected readonly stats = signal([
    { label: 'Active sessions', value: '128' },
    { label: 'Scheduled drops', value: '6' },
    { label: 'Pending reviews', value: '14' }
  ]);
}
