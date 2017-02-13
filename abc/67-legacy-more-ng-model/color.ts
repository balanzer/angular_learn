import {Component} from '@angular/core';

interface IColor {
  code: string;
  display: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './color.html'
})
export class ColorComponent {
  colors: IColor[];
  version = 'Beta';
  person = '';
  favoriteColor = 'Blue';
  show = false;

  constructor() {
    this.colors = [
      {
        code: 'Blue',
        display: 'Blue ish'
      },
      {
        code: 'Red',
        display: 'Red ish'
      },
      {
        code: 'Green',
        display: 'Green ish'
      }
    ];
  }
}
