import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
  customer = this.fb.group({
    name: new FormControl('', [Validators.minLength(3), Validators.maxLength(20)]),
    age: new FormControl('',[Validators.required, Validators.minLength(1), Validators.minLength(100)])
  }) 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addCustomer(){
    console.log(this.customer.value);
  }
}
