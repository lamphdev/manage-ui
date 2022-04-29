import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  initForm(): void {
    this.form = new FormGroup({
      controlFirst: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      controlLast: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      controlCheckbox: new FormControl(false, [Validators.required])
    })
  }

  handleSubmit(): void {
    const { valid, value } = this.form;
    if (valid) {
      //
    } else {
      this.form.markAllAsTouched();
    }
  }

}
