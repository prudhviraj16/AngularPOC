import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalsComponent } from '../modals/modals.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router, private authService: AuthService, public dialog: MatDialog) { }

  /* Register form reactive form */
  public registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required])
  });

  ngOnInit() {
  }

  /* If the form is valid, store the user details and redirect to the login page or throw error */
  public registerWithCredentials() {
    const username = this.registerForm.controls.username?.value
    const password = this.registerForm.controls.password.value
    const number = this.registerForm.controls.number?.value
    if (username && password && number) {
      const user:User = {
        username: username!,
        password: password!,
        number: number!
      }
      this.authService.addToRegister(user)
      this.router.navigate(['/login']);
    } else {
      this.openDialog()
      // Setting values and errors of input fields to null
      this.registerForm.controls.username?.setValue(null)
      this.registerForm.controls.password?.setValue(null)
      this.registerForm.controls.number?.setValue(null)
      this.registerForm.controls.username?.setErrors(null)
      this.registerForm.controls.password?.setErrors(null)
      this.registerForm.controls.number?.setErrors(null)
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalsComponent);

    dialogRef.afterClosed().subscribe(() => {
      
    });
  }
}
