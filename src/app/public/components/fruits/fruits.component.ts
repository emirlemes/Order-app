import { Component } from '@angular/core'
import { Item } from '../../models/item.model'

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent {
  selectedSort = 'Popular'
  fruits: Item[] = [
    new Item('Apple', 'https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg', 1.67, 1, 'kg'),
    new Item('Banana', 'https://www.konzumshop.ba/images/products/014/01410106l.gif', 2.67, 1, 'kg'),
    new Item('Orange', 'https://www.luluhypermarket.com/medias/18993-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNjc2MTV8aW1hZ2UvanBlZ3xoYjcvaDY4LzExOTE2MjMxOTAxMjE0LzE4OTkzLTAxLmpwZ18xMjAwV3gxMjAwSHxlZGI5ZGFjMDM2ZGUzNmI5ZGJiYzkzMTEwYTliMmQ0ZjIyM2E5OTI5Y2RjYTU1NDg4MDRmNjBhMjAyN2Y4NmQ3', 2.3, 1, 'kg'),
    new Item('Strawberry', 'https://www.luluhypermarket.com/medias/18993-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNjc2MTV8aW1hZ2UvanBlZ3xoYjcvaDY4LzExOTE2MjMxOTAxMjE0LzE4OTkzLTAxLmpwZ18xMjAwV3gxMjAwSHxlZGI5ZGFjMDM2ZGUzNmI5ZGJiYzkzMTEwYTliMmQ0ZjIyM2E5OTI5Y2RjYTU1NDg4MDRmNjBhMjAyN2Y4NmQ3', 5.0, 1, 'kg'),
  ]
}
