import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Section } from '../../../core/components/section/section';

@Component({
  selector: 'app-user-page',
  imports: [Section],
  template: `
    <app-section title="Welcome back" subtitle="Pick up where you left off.">
      <div class="list">
        @for (item of highlights(); track item.title) {
          <article class="item">
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
            <span class="pill">{{ item.status }}</span>
          </article>
        }
      </div>
    </app-section>
  `,
  styles: [
    `
      .list {
        display: grid;
        gap: 1rem;
      }

      .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1rem;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }

      h3 {
        margin: 0 0 0.35rem;
        font-size: 1rem;
      }

      p {
        margin: 0;
        color: rgba(245, 247, 255, 0.7);
      }

      .pill {
        padding: 0.35rem 0.8rem;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: 600;
        color: #0b0d12;
        background: #5cf2ff;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPage {
  protected readonly highlights = signal([
    {
      title: 'Continue series',
      description: 'Jump back into your last session.',
      status: 'Resume',
    },
    {
      title: 'New releases',
      description: 'Fresh drops curated for you.',
      status: 'Explore',
    },
    {
      title: 'Your list',
      description: 'Saved for later viewing.',
      status: 'Saved',
    },
  ]);
}
