import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor() { 
    this.form = new FormGroup({
      username:  new FormControl({value: '', disabled: false}, [Validators.required, Validators.email]),
      password: new FormControl({value: '', disabled: false}, [Validators.required, Validators.minLength(8)])
    })
  }

  submitForm(){
    if (this.form.valid) {
      console.log(this.form.getRawValue());
  } else {
      console.log('There is a problem with the form');
  }
}

  ngOnInit(): void {
  }

}
