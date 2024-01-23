import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  constructor(private router: Router) { }
  public value: boolean = false

  // Contact form
  public contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  // Submitting the form
  public onSubmit() {
    if (this.contactForm.valid) {
      this.value = true
    }
    else {
      alert('Please fill the form')
    }
  }

  // On clicking submit button, value is passed down to success component as true for success component visibility
  public afterSubmit(event: boolean) {
    this.contactForm.reset()
    this.value = event
  }
}
