import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'She Hulk', 'Thor', 'Ironman', 'Hulk'];
  public deleteHero?: string;

  removeLastHero(): void {
    const deleteHero = this.heroNames.pop();
    //console.log({ deleteHero })
  }

}
