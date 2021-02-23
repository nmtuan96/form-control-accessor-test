import { Component, forwardRef, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( ()=> CarComponent),
      multi: true
    }
  ]
})
export class CarComponent implements OnInit, ControlValueAccessor {

  public name = new FormControl('')
  
  onChange: (abc: String) => void;
  onTouched: ()=> void;
  disabled: boolean;
  constructor() { }

  writeValue(value : string): void {
    this.name.setValue(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled= isDisabled;
  }

  ngOnInit(): void {
  }

}
