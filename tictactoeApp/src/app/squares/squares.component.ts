import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-squares',
  styles: `
    button{
      width: 180px; 
      height:180px;
      border: 1px gray solid;
      margin: 10px;
    }
  `,
  standalone: true,
  imports: [],
  template: `
    <button class="square">{{ value }}</button>
  `
})
export class SquaresComponent {
  
  @Input() value?: 'X' | 'O';

}
