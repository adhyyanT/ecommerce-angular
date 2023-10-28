import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isSuccess = true;
  loginForm = new FormGroup({
    email: new FormControl(
      null,
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl(
      null,
      Validators.compose([Validators.required, Validators.minLength(4)])
    ),
  });
  constructor(private userService: UserService, private router: Router) {}

  handleSubmit() {
    if (this.loginForm.invalid) return;

    const res = this.userService.login(
      this.loginForm.controls['email'].value!,
      this.loginForm.controls['password'].value!
    );
    if (!res) this.isSuccess = false;
    else {
      this.router.navigate(['home']);
    }
  }
}
