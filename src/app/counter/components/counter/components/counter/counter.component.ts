//import { Component } from '@angular/core';

//@Component({
  //selector: 'app-counter',
  //template: '<h1>Hello Counter</h1>',
//})

//export class CounterComponent {

//}

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter:{{ counter }}</h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="increaseBy(-1)">-1</button>
<button (click)="resetCounter()">Reset</button>
  `
})

export class CounterComponent {
  public title: string = 'My first Angular Class';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
