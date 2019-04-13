import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
{
  private signUpForm : FormGroup;
  progressBar        : number;
  fullName           : any;
  dateOfBirth        : any;

  constructor(private fb : FormBuilder)
  {
    this.signUpForm = this.fb.group({
      fullName    : ["",Validators.compose([Validators.required])],
      email       : ["", Validators.compose([Validators.required])],
      password    : ["", Validators.compose([Validators.required])],
      dateOfBirth : ["", Validators.compose([Validators.required])],
    })
  }

  submitForm()
  {
    if(this.signUpForm.valid)
    {
      this.fullName    = this.signUpForm.value.fullName;
      this.dateOfBirth = this.signUpForm.value.dateOfBirth;
      console.log(`${this.fullName} ${this.dateOfBirth}`);
      this.signUpForm.get("email").setValue("email@gmail.com"); 
    }
  }

}
