import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(name) {
    window.alert(`The product ${name} has been shared!`);
  }

  onNotify(product) {
    window.alert(`You will be notified when the product ${product.name} goes on sale`);
  }
}
