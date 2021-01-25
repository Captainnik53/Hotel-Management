import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;

  constructor() {
    this.form1 = new FormGroup({
      headfname: new FormControl({value: '', disabled: false}, Validators.required),
      headlname: new FormControl({value: '', disabled: false}, Validators.required),
      heademail: new FormControl({value: '', disabled: false}, [Validators.required, Validators.email]),
      headage : new FormControl({value: '', disabled: false}, [Validators.required, Validators.pattern("[0-9]{0,3}")]),
      headphone : new FormControl({value: '', disabled: false}, [Validators.required, Validators.pattern("[0-9 ]{10}")]),
      childnum: new FormControl({value: '', disabled: false}, Validators.required),
      address: new FormControl({value: '', disabled: false}, Validators.required)
    })

    this.form2 = new FormGroup({
      spousefname: new FormControl({value: '', disabled: false}, Validators.required),
      spouselname: new FormControl({value: '', disabled: false}, Validators.required),
      spouseemail: new FormControl({value: '', disabled: false}, [Validators.required, Validators.email]),
      spouseage : new FormControl({value: '', disabled: false}, [Validators.required, Validators.pattern("[0-9]{0,3}")]),
      spousephone : new FormControl({value: '', disabled: false}, [Validators.required, Validators.pattern("[0-9 ]{10}")])
    })

    this.form3 = new FormGroup({
      numchild: new FormControl({value: '', disabled: false}, Validators.required),
    })
   }

   submitForm1(){
    if (this.form1.valid) {
      console.log(this.form1.getRawValue());
  } else {
      console.log('There is a problem with the form');
  }
}

submitForm2(){
  if (this.form2.valid) {
    console.log(this.form2.getRawValue());
} else {
    console.log('There is a problem with the form');
}
}

submitForm3(){
  if (this.form3.valid) {
    console.log(this.form3.getRawValue());
} else {
    console.log('There is a problem with the form');
}
}

  ngOnInit(): void {
  }

}
