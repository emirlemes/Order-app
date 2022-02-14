import { Component, Input } from '@angular/core'
import { Item } from 'src/app/public/models/item.model'

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input() fruit: Item | null = null
  increment() {
    if (this.fruit) {
      this.fruit.size++
    }
  }
  decrement() {
    if (this.fruit && this.fruit.size > 0) {
      this.fruit.size--
    }
  }

}
