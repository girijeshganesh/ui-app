import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(private userService: UserService, private fb: FormBuilder, private router:Router) {
    this.loginForm = this.fb.group({
      userName: ['', this.userService.userValidation.username.validator],
      password: ['', this.userService.userValidation.password.validator],
    });
  }

  ngOnInit(): void {

  }
  login() {
    this.userService.getUserDataFromJson().subscribe((data: any) => {
      const isUser = data.find((user: any) => user.username === this.loginForm.value.userName);
      if (isUser) {
        if (isUser.password === this.loginForm.value.password) {
          this.userService.getUserDataFromApi().subscribe((userData:any) => {
            localStorage.setItem('userData', JSON.stringify(userData?.results));
            userData && this.router.navigate(['home']);
          })
        }
        else {
          this.loginForm.controls.password.setErrors({ required: true });
        }
      }
      else {
        this.loginForm.controls.userName.setErrors({ required: true })
      }
    })
  }
}
