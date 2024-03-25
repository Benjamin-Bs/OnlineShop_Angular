import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-goods-cards',
  templateUrl: './goods-cards.component.html',
  styleUrl: './goods-cards.component.css'
})
export class GoodsCardsComponent {

  @Input() currentId: number;

  constructor() {
    this.currentId = 0;
  }

}
