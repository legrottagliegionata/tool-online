import {
  afterNextRender,
  afterRender,
  Component,
  inject,
  Injector,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tool-online';

  constructor() {
    afterRender(() => {
      console.log('cd just finished work! ');
    });
  }

  private readonly injector = inject(Injector);

  onClick(): void {
    afterNextRender(
      () => {
        console.log("you've just clicked!");
      },
      { injector: this.injector }
    );
  }
  
}
