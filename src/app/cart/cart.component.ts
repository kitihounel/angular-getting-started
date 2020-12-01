import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  @ViewChild("name") nameInput: ElementRef;
  @ViewChild("address") addressInput: ElementRef;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  ngAfterViewInit() {
    this.nameInput.nativeElement.focus()
  }

  onSubmit(customerData) {
    if (this.cartService.getItems().length == 0) {
      window.alert("Your cart is empty.")
      return
    }

    if (customerData.name.trim() == "") {
      window.alert("Please enter your name.")
      this.nameInput.nativeElement.focus()
      return
    }

    if (customerData.address.trim() == "") {
      window.alert("Please enter your address.")
      this.addressInput.nativeElement.focus()
      return
    }

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
