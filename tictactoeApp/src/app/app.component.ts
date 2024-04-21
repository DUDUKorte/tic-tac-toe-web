import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquaresComponent } from './squares/squares.component';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SquaresComponent,
    BoardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tictactoeApp';
}
