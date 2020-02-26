import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})

export class AdminProductsComponent implements OnInit {

  // optionSort = '';
  search: string;
  public productsForm: FormGroup;
  modalStatus = new BehaviorSubject(false);
  loading = false;

  
  constructor(private fb: FormBuilder) { }

  products: Product [] = [
    {
      name: 'hola',
      size: 'grande',
      price: 3,
    },
    {
      name: 'hola',
      size: 'peque',
      price: 1,
    },
    {
      name: 'hola',
      size: 'med',
      price: 2,
    }
  ]

  createProductsForm() {
      this.productsForm = this.fb.group({
        name: ['', Validators.required],
        size: ['', Validators.required],
        price: ['', Validators.required],
      });
    }
    
  ngOnInit() {

    this.createProductsForm();

  }

    openModal(product?){
      // if (product) {
      //   this.productsForm.controls.name.setValue(product.data.name);
      //   this.productsForm.controls.size.setValue(product.data.size);
      //   this.productsForm.controls.price.setValue(product.data.price);
      // } else {
      //   this.productsForm.reset();

      // }
      this.modalStatus.next(!this.modalStatus.value);

    }

    changeModalStatus(val) {
      this.modalStatus.next(val)
    }
  
    toggleModalStatus() {
      this.modalStatus.next(!this.modalStatus.value);
      this.createProductsForm();
    }

    saveChanges(){
      this.loading = true;
    this.modalStatus.next(false);
    }

}
