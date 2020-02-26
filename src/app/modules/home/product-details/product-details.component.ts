import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { product } from '../home/home.component';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  // PRODUCT: Product[] = [
  //   {
  //     name: "holi",
  //     size: "grande",
  //     price: 10,
  //   }
  // ]
  public productsQuantityForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router, private fb: FormBuilder) { }

  createProductsQuantityForm() {
    this.productsQuantityForm = this.fb.group({
      quantity: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.createProductsQuantityForm();

  }

}
